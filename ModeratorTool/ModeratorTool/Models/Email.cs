using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ModeratorTool.Models
{
    public class Email : BaseModel
    {
        public string Recipient { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
        public List<Marker> Attachments { get; set; }
    }
}