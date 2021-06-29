using System;
using System.Collections.Generic;
using System.Text;

namespace Service.Interfaces
{
    //Unit of Work Interface
    public interface IUOW : IDisposable
    {
        IProductRepository Products { get; }
        ICategoryRepository Categories { get; }
        IVacancyRepository Vacancies { get; }
        void Commit();
    }
}
