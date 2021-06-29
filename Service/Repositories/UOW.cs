using Database.Context;
using Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Service.Repositories
{
    // Unit of Work
    public class UOW : IUOW
    {
        private AppDbContext _context;

        private IProductRepository _productRepository;
        private ICategoryRepository _categoryRepository;
        private IVacancyRepository _vacancyRepository;

        public UOW(AppDbContext context)
        {
            _context = context;
        }

        public IProductRepository Products
        {
            get
            {
                if (_productRepository == null)
                    _productRepository = new ProductRepository(_context);
                return _productRepository;
            }
        }
        public IVacancyRepository Vacancies
        {
            get
            {
                if (_vacancyRepository == null)
                    _vacancyRepository = new VacancyRepository(_context);
                return _vacancyRepository;
            }
        }
        public ICategoryRepository Categories
        {
            get
            {
                if (_categoryRepository == null)
                    _categoryRepository = new CategoryRepository(_context);
                return _categoryRepository;
            }
        }


        public void Commit()
        {
            _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

    }
}
