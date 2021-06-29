using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Database.Context;
using Database.Entities;
using Service.Interfaces;
using Business.Interfaces;
using Business.DTOs;
using Business.DTOs.Product;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Topelectro.Shared;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;

namespace Topelectro.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductOperation _productOperation;
        private IWebHostEnvironment _env;

        public ProductsController(IProductOperation productOperation, IWebHostEnvironment env)
        {
            _productOperation = productOperation;
            _env = env;
        }
        // GET: api/Products
        [AllowAnonymous]
        [HttpGet]
        public async Task<IEnumerable<ProductDTO>> GetProducts()
        {
            return await _productOperation.GetAll();
        }
        // GET: api/Products/ByCategory/rosets
        [AllowAnonymous]
        [Route("ByCategory/{category}")]
        [HttpGet("{category}")]
        public IEnumerable<ProductDTO> GetByCategory(string category)
        {
            return _productOperation.GetByCategory(category);
        }
        // GET: api/Products/ByFilter
        [Route("ByFilter")]
        [HttpPost("{filter}")]
        public IEnumerable<ProductDTO> GetByFilter([FromBody]ProductSmallFilterDTO filter)
        {
            return _productOperation.GetByFilter(filter);
        }
        // POST: api/Products/Changeprice
        [Route("Changeprice")]
        [HttpPost("{priceChange}")]
        public void Changeprice([FromBody] PriceChangeDTO priceChange)
        {
            _productOperation.ChangeAllPrice(priceChange);
        }

        // GET: api/Products/Latest/5
        [AllowAnonymous]
        [Route("Latest/{number}")]
        [HttpGet("{number}")]
        public async Task<IEnumerable<ProductDTO>> Latest(int number)
        {
            return await _productOperation.GetLatestN(number);
        }
        // GET: api/Products/WithCategories/5
        [AllowAnonymous]
        [Route("WithCategories/{number}")]
        [HttpGet("{number}")]
        public async Task<IEnumerable<ProductDTO>> WithCategories(int number)
        {
            return await _productOperation.GetWithCategories(number);
        }


        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public StatusCodeResult DeleteProduct(int id)
        {
            var oldFileName = _productOperation.GetPictureName(id);
            if (oldFileName != "")
            {
                FileControlTools.DeleteImage(_env, oldFileName, "products" );
            }

            _productOperation.Delete(id);
            return NoContent();
        }

        //// POST: api/Products
        [HttpPost]
        public async Task<ProductDTO> PostProduct(
            // არ მომწონს ეს გზა, მაგრამ საკმაოდ ბევრ საათიანი წვალების შემდეგ... Se La Vie
            [FromForm] string name,
            [FromForm] string price,
            [FromForm] string sq,
            [FromForm] string colors,
            [FromForm] string materials,
            [FromForm] string moreInfo,
            [FromForm] string categoryIds,
            [FromForm] IFormFile file
            )
        {
            ProductFormDTO product = new ProductFormDTO();
            product.Name = name;
            product.Price = Double.Parse(price);
            product.SQ = sq;
            product.Colors = colors;
            product.Materials = materials;
            product.MoreInfo = moreInfo;
            product.Date = DateTime.Now;
            product.Picture = FileControlTools.UploadImage(file, _env, "products");

            // multipleSelect ში მიღებულიმ ნიშვნელობების int[] ტიპად გადაქცევა
            char[] charsToRemove = { '[', ']', '\\', '"' };
            foreach (var c in charsToRemove)
                categoryIds = categoryIds.Replace(c, ' ');
            int[] ids = Array.ConvertAll(categoryIds.Trim().Split(","), s => int.Parse(s));

            product.categoryIds = ids;
            _productOperation.Add(product);

            var prod = await _productOperation.Find(x => x.Date == product.Date);

            return prod;
        }
 
        // PUT: api/Products/5
        [HttpPut("{id}")]
        public async Task<ProductDTO> PutProduct(int id, ProductFormDTO product)
        {
            if (id != product.Id)
            {
                return null;
            }

            _productOperation.Update(product);

            var prod = await _productOperation.Find(x => x.Id == product.Id);
            return prod;
        }

        // GET: api/Products/UpdateImage/5
        [Route("UpdateImage/{id}")]
        [HttpPut("UpdateImage/{id}")]
        public string UpdateImage(int id, [FromForm] IFormFile file)
        {
            // წაშალე ძველი
            var oldFileName = _productOperation.GetPictureName(id);
            if(oldFileName != "")
            {
                FileControlTools.DeleteImage(_env, oldFileName, "products");
            }
            // დაამატე ახალი და განაახლე ბაზაში
            var newFileName = FileControlTools.UploadImage(file, _env, "products");
            _productOperation.UpdateImage(id, newFileName);
            return newFileName;
        }

    }
}
