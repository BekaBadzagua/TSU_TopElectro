using Database.Context;
using Database.Entities;
using Microsoft.EntityFrameworkCore;
using Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Repositories
{
    public class CategoryRepository : RepositoryBase<Category>, ICategoryRepository
    {
        public CategoryRepository(AppDbContext context)
            : base(context)
        {

        }

        public IEnumerable<Category> GetCategories(int[] ids)
        {
            return GetByCondition(x => ids.Contains(x.Id));
        }

        public Category GetOneByDescriptor(string descriptor)
        {
            return Context.Categories
                .Where(x => x.Descriptor == descriptor)
                .Include(x => x.Products)
                .FirstOrDefault();
        }
    }
}
