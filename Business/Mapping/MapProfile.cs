using AutoMapper;
using Business.DTOs.Category;
using Business.DTOs.Product;
using Business.DTOs.Vacancy;
using Database.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Mapping
{
    public class MapProfile : Profile
    {

        private readonly IMapper _mapper;

        public MapProfile(IMapper mapper)
        {
            _mapper = mapper;
        }

        public MapProfile()
        {
            CreateMap<Category, CategoryDTO>();
            CreateMap<Category, CategoryShortDTO>();
            CreateMap<Category, CategoryListItemDTO>();
            CreateMap<Product, ProductDTO>();
            CreateMap<ProductDTO, Product>();
            CreateMap<ProductFormDTO, Product>();
            CreateMap<VacancyDTO, Vacancy>();
            CreateMap<Vacancy, VacancyDTO > ();

        }
    }
}
