using Business.DTOs.Vacancy;
using Business.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Topelectro.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class VacancyController : ControllerBase
    {
        private readonly IVacancyOperations _vacancytOperation;
        public VacancyController(IVacancyOperations vacancyOperation)
        {
            _vacancytOperation = vacancyOperation;
        }

        // GET: api/Vacancy
        [AllowAnonymous]
        [HttpGet]
        public async Task<IEnumerable<VacancyDTO>> GetVacancy()
        {
            return await _vacancytOperation.GetAll();
        }

        // POST: api/Vacancy
        [HttpPost]
        public async Task<VacancyDTO> PostVacancy(VacancyDTO vacancy)
        {
            vacancy.Date = DateTime.Now;
            _vacancytOperation.Add(vacancy);
            var vac = await _vacancytOperation.Find(x => x.Date == vacancy.Date);
            return vac;
        }
        // PUT: api/Vacancy/5
        [HttpPut("{id}")]
        public async Task<VacancyDTO> PutVacancy(int id, VacancyDTO vacancy)
        {
            if (id != vacancy.Id)
            {
                return null;
            }

            _vacancytOperation.Update(vacancy);

            var vac = await _vacancytOperation.Find(x => x.Id == vacancy.Id);
            return vac;
        }
        // DELETE: api/Vacancy/5
        [HttpDelete("{id}")]
        public StatusCodeResult DeleteVacancy(int id)
        {
            _vacancytOperation.Delete(id);
            return NoContent();
        }
    }
}
