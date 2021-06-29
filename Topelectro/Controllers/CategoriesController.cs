using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Database.Context;
using Database.Entities;
using Business.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Business.DTOs.Category;

namespace Topelectro.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryOperation _categoryOperation;
        private IWebHostEnvironment _env;
        public CategoriesController(ICategoryOperation categoryOperation, IWebHostEnvironment env)
        {
            _categoryOperation = categoryOperation;
            _env = env;
        }

        //// GET: api/Categories/ShortList
        [Route("ShortList")]
        [HttpGet]
        public async Task<IEnumerable<CategoryListItemDTO>> ShortList()
        {
            return await _categoryOperation.GetList();
        }

    }
}
