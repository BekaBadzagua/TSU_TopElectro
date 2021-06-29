using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database.Entities
{
    public class Vacancy
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Position { get; set; }
        public string location { get; set; }
        public string EmploymentForm { get; set; }
        public string WorkHours { get; set; }
        public string RestPeriod { get; set; }
        public string Salary { get; set; }
        public string Description { get; set; }
        public string DetailedDescription { get; set; }
    }
}
