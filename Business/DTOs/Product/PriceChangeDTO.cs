using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.DTOs.Product
{
    public class PriceChangeDTO
    {
        public string Operation { get; set; }
        public int Difference { get; set; }
    }
}
