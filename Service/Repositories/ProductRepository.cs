using Database.Entities;
using Database.Context;
using Microsoft.EntityFrameworkCore;
using Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Linq.Expressions;

namespace Service.Repositories
{
    public class ProductRepository : RepositoryBase<Product>, IProductRepository
    {
        public ProductRepository(AppDbContext context)
            : base(context)
        {

        }

        public async Task<IEnumerable<Product>> GetLatestN(int number)
        {
            return await
                Context.Products
                .OrderByDescending(x => x.Date)
                .Take(number)
                .ToListAsync();
        }

        public async Task<IEnumerable<Product>> GetWithCategories(int number = 0)
        {

            if (number == 0)
            {
                var result = Context.Products
                .OrderByDescending(x => x.Date)
                .Include(x => x.Categories)
                .ToListAsync();
                return await result;
            }
            else
            {
                return await Context.Products
                .OrderByDescending(x => x.Date)
                .Take(number)
                .Include(x => x.Categories)
                .ToListAsync();
            }
        }

        public Product GetWithCategories(Expression<Func<Product, bool>> expression)
        {
            return Context.Products
                .Where(expression)
                .Include(x => x.Categories)
                .FirstOrDefault();
        }
        public IQueryable<Product> GetQuery()
        {
            return Context.Products;
        }

        public IEnumerable<Product> GetAllNow()
        {
            return Context.Products.ToList();
        }

        public void SaveChanges()
        {
            Context.SaveChanges();
        }
    }
}
