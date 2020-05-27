using ModeratorTool.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace ModeratorTool.Controllers
{
    public class ModeratorController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AllMarks()
        {
            return View();
        }

        public ActionResult IncomingMarks()
        {
            return View();
        }

        [HttpGet]
        public ActionResult ViewMarker(int id)
        {
            return View();
        }

        [HttpPost]
        public ActionResult ViewMarker(Marker model)
        {
            return View();
        }

        [HttpGet]
        public ActionResult SendMail()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SendMail(Email content)
        {
            string recipient = Request["to"];
            string subject = Request["subject"];
            string body = Request["body"];

            WebMail.SmtpServer = "smtp.gmail.com";
            WebMail.SmtpPort = 587;
            WebMail.SmtpUseDefaultCredentials = true;
            WebMail.EnableSsl = true;
            WebMail.UserName = "sigmaautoresponse@gmail.com";
            WebMail.Password = "Qwerty322q";

            WebMail.Send(recipient, subject, body, isBodyHtml: true);

            return View();
        }
    }
}