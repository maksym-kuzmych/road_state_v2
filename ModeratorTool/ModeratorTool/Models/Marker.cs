using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ModeratorTool.Models
{
    public class Marker : BaseModel
    {
        public string AuthorName { get; set; }
        public int Rating { get; set; }
        public string State { get; set; }
        public string Description { get; set; }
        public DateTime CreationDate { get; set; }
        public Location Location { get; set; }
        public List<HttpPostedFileBase> Photos { get; set; }
    }
}