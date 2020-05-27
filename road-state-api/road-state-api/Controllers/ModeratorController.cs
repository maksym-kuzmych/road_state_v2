using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using road_state_api.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace road_state_api.Controllers
{
    public class ModeratorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult AllMarks()
        {
            return View();
        }

        public IActionResult IncomingMarks()
        {
            return View();
        }

        [HttpGet]
        public IActionResult ViewMarker(int id)
        {
            return View();
        }

        [HttpPost]
        public IActionResult ViewMarker(Marker model)
        {
            return View();
        }
    }
}
