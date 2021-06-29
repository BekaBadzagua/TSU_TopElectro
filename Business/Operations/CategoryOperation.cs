using AutoMapper;
using Business.DTOs.Category;
using Business.Interfaces;
using Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Operations
{
    public class CategoryOperation : ICategoryOperation
    {

        private readonly IUOW _dbService;
        private readonly IMapper _mapper;

        public CategoryOperation(IUOW uow, IMapper mapper)
        {
            _dbService = uow;
            _mapper = mapper;
        }

        public async Task<IEnumerable<CategoryListItemDTO>> GetList()
        {
            var products = await _dbService.Categories.GetAll();

            return _mapper.Map<IEnumerable<CategoryListItemDTO>>(products);
        }
    }
}
