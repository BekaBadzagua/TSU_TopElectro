using Database.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Service.Interfaces
{
    public interface IProductRepository : IRepositoryBase<Product>
    {
        IEnumerable<Product> GetAllNow();
        Task<IEnumerable<Product>> GetLatestN(int number);
        Task<IEnumerable<Product>> GetWithCategories(int number = 0);
        Product GetWithCategories(Expression<Func<Product, bool>> expression);
        IQueryable<Product> GetQuery();
        void SaveChanges();
    }
}
