using Business.DTOs.Vacancy;
using Database.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Business.Interfaces
{
    public interface IVacancyOperations
    {
        Task<IEnumerable<VacancyDTO>> GetAll();
        void Add(VacancyDTO vacancy);
        void Delete(int id);
        void Update(VacancyDTO vacancy);
        Task<VacancyDTO> Find(Expression<Func<Vacancy, bool>> expression);

    }
}
