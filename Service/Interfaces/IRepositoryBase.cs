using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Service.Interfaces
{
    public interface IRepositoryBase<T>
    {
        Task<IEnumerable<T>> GetAll();
        IEnumerable<T> GetByCondition(Expression<Func<T, bool>> expression);

        Task<T> Find(Expression<Func<T, bool>> expression);

        T Get(int Id);

        void Create(T entity);

        void Update(T entity);

        void Delete(int id);
    }
}
