using AutoMapper;
using Business.DTOs.Product;
using Business.Interfaces;
using Database.Entities;
using Microsoft.EntityFrameworkCore;
using Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Business.Operations
{
    public class ProductOperation : IProductOperation
    {
        private readonly IUOW _dbService;
        private readonly IMapper _mapper;

        public ProductOperation(IUOW uow, IMapper mapper)
        {
            _dbService = uow;
            _mapper = mapper;
        }

        public async Task<IEnumerable<ProductDTO>> GetAll()
        {
            var products = await _dbService.Products.GetAll();

            return _mapper.Map<IEnumerable<ProductDTO>>(products);
        }
        public IEnumerable<ProductDTO> GetByCategory(string descriptor)
        {
            var category = _dbService.Categories.GetOneByDescriptor(descriptor);
            return _mapper.Map<IEnumerable<ProductDTO>>(category.Products);
        }

        public async Task<IEnumerable<ProductDTO>> GetWithCategories(int num)
        {
            var products = await _dbService.Products.GetWithCategories(num);

            return _mapper.Map<IEnumerable<ProductDTO>>(products);
        }
        public void Add(ProductFormDTO product)
        {
            var entity = _mapper.Map<Product>(product);
            entity.Categories = _dbService.Categories.GetCategories(product.categoryIds).ToList();
            _dbService.Products.Create(entity);
        }

        public void Delete(int id)
        {
            _dbService.Products.Delete(id);
        }

        public void Update(ProductFormDTO product)
        {
            var newEntity = _mapper.Map<Product>(product);
            var entity = _dbService.Products.GetWithCategories(pr => pr.Id == product.Id);
            var ids = product.categoryIds;

            foreach( var item in entity.Categories)
            {
                if (!ids.Contains(item.Id))
                    entity.Categories.Remove(entity.Categories.Where(x => x.Id == item.Id).FirstOrDefault());
                else
                    ids = ids.Where(x => x != item.Id).ToArray();
            }
            if(ids.Length > 0)
            {
                var newCategories = _dbService.Categories.GetCategories(ids).ToList();
                //ვინაიდან ქოლექშენში სხვა სიის ბევრი ელემნტის ერთდროულა დამატება არ გამოდის
                // ან ექსთენშენი მეთოდი უნდა გამოვიყენოთ, ან სხვა ტიპი, ან სათითაოდ დავამატოთ
                foreach(var item in newCategories)
                {
                    entity.Categories.Add(item);
                }
            }

            entity.Colors = newEntity.Colors;
            entity.Materials = newEntity.Materials;
            entity.MoreInfo = newEntity.MoreInfo;
            entity.Name = newEntity.Name;
            entity.Price = newEntity.Price;
            entity.SQ = newEntity.SQ;

            _dbService.Products.Update(entity);
        }

        public void UpdateImage(int id, string name)
        {
            var entity = _dbService.Products.Get(id);
            entity.Picture = name;
            _dbService.Products.Update(entity);
        }

        public string GetPictureName(int id)
        {
            var entity = _dbService.Products.Get(id);
            return entity.Picture;
        }

        public async Task<ProductDTO> Find(Expression<Func<Product, bool>> expression)
        {
             var product = await _dbService.Products.Find(expression);
            return  _mapper.Map<ProductDTO>(product);
        }

        public async Task<IEnumerable<ProductDTO>> GetLatestN(int num)
        {
            var products = await _dbService.Products.GetLatestN(num);
            return _mapper.Map<IEnumerable<ProductDTO>>(products);
        }

        public IEnumerable<ProductDTO> GetByFilter(ProductSmallFilterDTO filter)
        {
            var productsQuery = _dbService.Products.GetQuery();
            if(filter.Name != "")
                productsQuery = productsQuery.Where(x => x.Name.Contains(filter.Name));
            if (filter.SQ != "")
                productsQuery = productsQuery.Where(x => x.SQ.Contains(filter.SQ));
            if(filter.categoryIds.Length > 0)
                productsQuery = productsQuery.Where(x => x.Categories.Any(x => filter.categoryIds.Contains(x.Id)));

            var products = productsQuery
                .OrderByDescending(x => x.Date)
                .Include(x => x.Categories)
                .ToList();

            return _mapper.Map<IEnumerable<ProductDTO>>(products);
        }

        public void ChangeAllPrice(PriceChangeDTO priceChange)
        {
            var products = _dbService.Products.GetAllNow();

            if(priceChange.Difference < 0)
                throw new ArgumentException();

            if(priceChange.Operation == "incr")
            {
                foreach(var product in products)
                {
                    var newPrice = product.Price + product.Price * priceChange.Difference / 100;
                    product.Price =  (double)Math.Round(newPrice, 2);
                }
                _dbService.Products.SaveChanges();
            }
            else if (priceChange.Operation == "decr")
            {
                foreach (var product in products)
                {
                    var newPrice = product.Price - product.Price * priceChange.Difference / 100;
                    product.Price = (double)Math.Round(newPrice, 2);
                }
                _dbService.Products.SaveChanges();
            }
            else throw new ArgumentException();
        }
    }
}
