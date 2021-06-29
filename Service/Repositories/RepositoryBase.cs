using Database.Context;
using Database.Entities;
using Microsoft.EntityFrameworkCore;
using Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Service.Repositories
{
    public class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected AppDbContext Context { get; set; }

        public RepositoryBase(AppDbContext context)
        {
            this.Context = context;
        }


        public async Task<IEnumerable<T>> GetAll()
        {
            return await Context.Set<T>().ToListAsync();
        }

        public void Create(T entity)
        {

            Context.Set<T>().AddAsync(entity);
            Context.SaveChanges();
        }
        public void Delete(int id)
        {
            var entity = Get(id);
            Context.Set<T>().Remove(entity);
            Context.SaveChanges();
        }
        public IEnumerable<T> GetByCondition(Expression<Func<T, bool>> expression)
        {
            return Context.Set<T>().Where(expression);
        }

        public async Task<T> Find(Expression<Func<T, bool>> expression)
        {
            return await Context.Set<T>().Where(expression).FirstOrDefaultAsync();
        }

        public T Get(int Id)
        {
            return Context.Set<T>().Find(Id);
        }
        public void Update(T entity)
        {
            Context.Set<T>().Update(entity);
            Context.SaveChanges();
        }

    }
}
