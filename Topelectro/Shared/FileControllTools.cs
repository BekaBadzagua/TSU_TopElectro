using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Topelectro.Shared
{
    public class FileControlTools
    {

        public static string UploadImage(IFormFile file, IWebHostEnvironment _env, string innerFolder = "")
        {
            if (file != null && file.Length > 0)
            {
                var webRoot = _env.WebRootPath;
                var fileIndex = GenerateFileIndex();
                CheckAndCreateDirectory($"images/{innerFolder}/{fileIndex}", _env);
                var PathFolder = Path.Combine(webRoot, $"images/{innerFolder}");
                var FileName = fileIndex + Guid.NewGuid().ToString() + "_" + file.FileName;

                string filePath = Path.Combine(PathFolder, FileName);
                using var fileStream = new FileStream(filePath, FileMode.Create);
                file.CopyTo(fileStream);

                return FileName;
            }
            return "";
        }

        public static void DeleteImage(IWebHostEnvironment _env, string fileName, string innerFolder = "")
        {
            var webRoot = _env.WebRootPath;
            var FullPath = Path.Combine(webRoot, "images/" + innerFolder + "/"+ fileName);
            File.Delete(FullPath);
        }

        private static string GenerateFileIndex()
        {
            return DateTime.Now.Month + "/" + DateTime.Now.Day + "/" + DateTime.Now.Hour + "/";
        }
        private static void CheckAndCreateDirectory(string path, IWebHostEnvironment _env)
        {
            bool exist = Directory.Exists(Path.Combine(_env.WebRootPath, path));
            if (!exist)
                Directory.CreateDirectory(Path.Combine(_env.WebRootPath, path));
        }
    }
}
