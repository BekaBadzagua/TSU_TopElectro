using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Database.Migrations
{
    public partial class catgoryGroupTableDeleted : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Categories_CategoryGroups_CategoryGroupId",
                table: "Categories");

            migrationBuilder.DropTable(
                name: "CategoryGroups");

            migrationBuilder.DropIndex(
                name: "IX_Categories_CategoryGroupId",
                table: "Categories");

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DropColumn(
                name: "CategoryGroupId",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "Picture",
                table: "Categories");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CategoryGroupId",
                table: "Categories",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Picture",
                table: "Categories",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "CategoryGroups",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoryGroups", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "CategoryGroups",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[,]
                {
                    { 1, null, "Cabels" },
                    { 2, null, "Rosets" }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Colors", "Date", "Materials", "MoreInfo", "Name", "Picture", "Price", "SQ" },
                values: new object[,]
                {
                    { 1, "red silver black", new DateTime(2020, 12, 14, 16, 35, 5, 5, DateTimeKind.Local).AddTicks(1918), "wood ceramic", null, "RetroCabel1", null, 4.5, "SQ2801-0112" },
                    { 2, "red silver black", new DateTime(2020, 12, 14, 16, 35, 5, 6, DateTimeKind.Local).AddTicks(5512), "wood ceramic", null, "product 2", null, 41.5, "SQ2801-0112" },
                    { 3, "red silver black", new DateTime(2020, 12, 14, 16, 35, 5, 6, DateTimeKind.Local).AddTicks(5545), "wood ceramic", null, "my cable3", null, 4.5, "SQ2801-0112" },
                    { 4, "red silver black", new DateTime(2020, 12, 14, 16, 35, 5, 6, DateTimeKind.Local).AddTicks(5549), "wood ceramic", null, "dog 32", null, 4.5, "SQ2801-0112" }
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "CategoryGroupId", "Description", "Descriptor", "Name", "Picture" },
                values: new object[,]
                {
                    { 1, 1, null, null, "Retro", null },
                    { 2, 1, null, null, "Vintage", null },
                    { 3, 2, null, null, "InnerRosets", null },
                    { 4, 2, null, null, "OuterRosets", null },
                    { 5, 2, null, null, "Trigger", null }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Categories_CategoryGroupId",
                table: "Categories",
                column: "CategoryGroupId");

            migrationBuilder.AddForeignKey(
                name: "FK_Categories_CategoryGroups_CategoryGroupId",
                table: "Categories",
                column: "CategoryGroupId",
                principalTable: "CategoryGroups",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
