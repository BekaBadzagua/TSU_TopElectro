using Business.DTOs.Product;
using Database.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Business.Interfaces
{
    public interface IProductOperation
    {
        Task<IEnumerable<ProductDTO>> GetAll();
        Task<IEnumerable<ProductDTO>> GetWithCategories(int num);
        Task<IEnumerable<ProductDTO>> GetLatestN(int num);
        IEnumerable<ProductDTO> GetByCategory(string descriptor);
        IEnumerable<ProductDTO> GetByFilter(ProductSmallFilterDTO filter);

        Task<ProductDTO> Find(Expression<Func<Product, bool>> expression);
        void Add(ProductFormDTO product);
        void Delete(int id);
        void Update(ProductFormDTO product);
        void UpdateImage(int id, string name);
        string GetPictureName(int id);
        void ChangeAllPrice(PriceChangeDTO priceChange);
    }
}
