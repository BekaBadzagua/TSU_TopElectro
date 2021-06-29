using Database.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database.Context
{
    public static class DatabaseInitializer
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Category>().HasData(
            //    new Category()
            //    {
            //        Id = 1,
            //        Name = "Retro",
            //        Description = null,
            //        Picture = null,
            //        CategoryGroupId = 1
            //    },
            //    new Category()
            //    {
            //        Id = 2,
            //        Name = "Vintage",
            //        Description = null,
            //        Picture = null,
            //        CategoryGroupId = 1
            //    },
            //    new Category()
            //    {
            //        Id = 3,
            //        Name = "InnerRosets",
            //        Description = null,
            //        Picture = null,
            //        CategoryGroupId = 2
            //    },
            //    new Category()
            //    {
            //        Id = 4,
            //        Name = "OuterRosets",
            //        Description = null,
            //        Picture = null,
            //        CategoryGroupId = 2
            //    },
            //    new Category()
            //    {
            //        Id = 5,
            //        Name = "Trigger",
            //        Description = null,
            //        Picture = null,
            //        CategoryGroupId = 2
            //    }
            //); ;
            //modelBuilder.Entity<Product>().HasData(
            //    new Product()
            //    {
            //        Id = 1,
            //        Name = "RetroCabel1",
            //        Price = 4.5,
            //        SQ = "SQ2801-0112",
            //        Colors = "red silver black",
            //        Materials = "wood ceramic",
            //        Picture = null,
            //        MoreInfo = null,
            //        Date = DateTime.Now
            //    },
            //    new Product()
            //    {
            //        Id = 2,
            //        Name = "product 2",
            //        Price = 41.5,
            //        SQ = "SQ2801-0112",
            //        Colors = "red silver black",
            //        Materials = "wood ceramic",
            //        Picture = null,
            //        MoreInfo = null,
            //        Date = DateTime.Now
            //    },
            //    new Product()
            //    {
            //        Id = 3,
            //        Name = "my cable3",
            //        Price = 4.5,
            //        SQ = "SQ2801-0112",
            //        Colors = "red silver black",
            //        Materials = "wood ceramic",
            //        Picture = null,
            //        MoreInfo = null,
            //        Date = DateTime.Now
            //    },
            //    new Product()
            //    {
            //        Id = 4,
            //        Name = "dog 32",
            //        Price = 4.5,
            //        SQ = "SQ2801-0112",
            //        Colors = "red silver black",
            //        Materials = "wood ceramic",
            //        Picture = null,
            //        MoreInfo = null,
            //        Date = DateTime.Now
            //    }
            //);
        }
    }
}
