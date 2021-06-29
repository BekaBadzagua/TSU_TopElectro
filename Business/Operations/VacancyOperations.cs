using AutoMapper;
using Business.DTOs.Vacancy;
using Business.Interfaces;
using Database.Entities;
using Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Business.Operations
{
    public class VacancyOperations : IVacancyOperations
    {
        private readonly IUOW _dbService;
        private readonly IMapper _mapper;

        public VacancyOperations(IUOW uow, IMapper mapper)
        {
            _dbService = uow;
            _mapper = mapper;
        }
        public async Task<IEnumerable<VacancyDTO>> GetAll()
        {
            var vacancies = await _dbService.Vacancies.GetAll();

            return _mapper.Map<IEnumerable<VacancyDTO>>(vacancies);
        }

        public void Add(VacancyDTO vacancy)
        {
            var entity = _mapper.Map<Vacancy>(vacancy);


            _dbService.Vacancies.Create(entity);
        }


        public void Update(VacancyDTO vacancy)
        {
            var entity = _mapper.Map<Vacancy>(vacancy);
            _dbService.Vacancies.Update(entity);
        }

        public void Delete(int id)
        {
            _dbService.Vacancies.Delete(id);
        }

        public async Task<VacancyDTO> Find(Expression<Func<Vacancy, bool>> expression)
        {
            var vacancy = await _dbService.Vacancies.Find(expression);
            return _mapper.Map<VacancyDTO>(vacancy);
        }
    }
}
