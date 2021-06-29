﻿// <auto-generated />
using System;
using Database.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Database.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20201214112945_extra-table-removed")]
    partial class extratableremoved
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("CategoryProduct", b =>
                {
                    b.Property<int>("CategoriesId")
                        .HasColumnType("int");

                    b.Property<int>("ProductsId")
                        .HasColumnType("int");

                    b.HasKey("CategoriesId", "ProductsId");

                    b.HasIndex("ProductsId");

                    b.ToTable("CategoryProduct");
                });

            modelBuilder.Entity("Database.Entities.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("CategoryGroupId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Picture")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CategoryGroupId");

                    b.ToTable("Categories");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CategoryGroupId = 1,
                            Name = "Retro"
                        },
                        new
                        {
                            Id = 2,
                            CategoryGroupId = 1,
                            Name = "Vintage"
                        },
                        new
                        {
                            Id = 3,
                            CategoryGroupId = 2,
                            Name = "InnerRosets"
                        },
                        new
                        {
                            Id = 4,
                            CategoryGroupId = 2,
                            Name = "OuterRosets"
                        },
                        new
                        {
                            Id = 5,
                            CategoryGroupId = 2,
                            Name = "Trigger"
                        });
                });

            modelBuilder.Entity("Database.Entities.CategoryGroup", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("CategoryGroups");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Cabels"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Rosets"
                        });
                });

            modelBuilder.Entity("Database.Entities.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Colors")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Materials")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MoreInfo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Picture")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<string>("SQ")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Colors = "red silver black",
                            Date = new DateTime(2020, 12, 14, 15, 29, 44, 716, DateTimeKind.Local).AddTicks(8120),
                            Materials = "wood ceramic",
                            Name = "RetroCabel1",
                            Price = 4.5,
                            SQ = "SQ2801-0112"
                        },
                        new
                        {
                            Id = 2,
                            Colors = "red silver black",
                            Date = new DateTime(2020, 12, 14, 15, 29, 44, 718, DateTimeKind.Local).AddTicks(2061),
                            Materials = "wood ceramic",
                            Name = "product 2",
                            Price = 41.5,
                            SQ = "SQ2801-0112"
                        },
                        new
                        {
                            Id = 3,
                            Colors = "red silver black",
                            Date = new DateTime(2020, 12, 14, 15, 29, 44, 718, DateTimeKind.Local).AddTicks(2085),
                            Materials = "wood ceramic",
                            Name = "my cable3",
                            Price = 4.5,
                            SQ = "SQ2801-0112"
                        },
                        new
                        {
                            Id = 4,
                            Colors = "red silver black",
                            Date = new DateTime(2020, 12, 14, 15, 29, 44, 718, DateTimeKind.Local).AddTicks(2089),
                            Materials = "wood ceramic",
                            Name = "dog 32",
                            Price = 4.5,
                            SQ = "SQ2801-0112"
                        });
                });

            modelBuilder.Entity("CategoryProduct", b =>
                {
                    b.HasOne("Database.Entities.Category", null)
                        .WithMany()
                        .HasForeignKey("CategoriesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Database.Entities.Product", null)
                        .WithMany()
                        .HasForeignKey("ProductsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Database.Entities.Category", b =>
                {
                    b.HasOne("Database.Entities.CategoryGroup", "CategoryGroup")
                        .WithMany("Categories")
                        .HasForeignKey("CategoryGroupId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CategoryGroup");
                });

            modelBuilder.Entity("Database.Entities.CategoryGroup", b =>
                {
                    b.Navigation("Categories");
                });
#pragma warning restore 612, 618
        }
    }
}
