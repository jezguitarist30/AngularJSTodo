using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularJSTodo.Models
{
    public class Todos
    {
        public int Id { get; set; }
        public String Task { get; set; }
        public int Priority { get; set; }
        public DateTime? DueDate { get; set; }
    }
}