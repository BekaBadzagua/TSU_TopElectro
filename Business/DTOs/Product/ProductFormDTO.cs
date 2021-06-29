﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.DTOs.Product
{
    public class ProductFormDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string SQ { get; set; }
        public string Colors { get; set; }
        public string Materials { get; set; }
        public string MoreInfo { get; set; }
        public string Picture { get; set; }
        public DateTime Date { get; set; }
        public int[] categoryIds { get; set; }

    }
}
