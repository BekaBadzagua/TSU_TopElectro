using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.DTOs.Product
{
    public class ProductSmallFilterDTO
    {
        public string Name { get; set; }
        public string SQ { get; set; }
        public int[] categoryIds { get; set; }
    }
}