using Business.DTOs.Category;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Interfaces
{
    public interface ICategoryOperation
    {
        Task<IEnumerable<CategoryListItemDTO>> GetList();
    }
}
