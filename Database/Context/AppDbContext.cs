using Database.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database.Context
{
    public class AppDbContext : IdentityDbContext<User>
    {
        public AppDbContext(DbContextOptions options)
        : base(options)
            {

            }

        public DbSet<Product> Products { get; set; }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Vacancy> Vacancies { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>()
               .HasMany(x => x.Categories)
               .WithMany(x => x.Products);

            modelBuilder.Entity<Category>()
               .HasMany(x => x.Products)
               .WithMany(x => x.Categories);

            modelBuilder.Entity<Vacancy>()
                .Property(x => x.Position)
                .IsRequired();
            modelBuilder.Entity<Vacancy>()
                .Property(x => x.Description)
                .IsRequired();
            


            modelBuilder.Seed();
        }

    }
}
