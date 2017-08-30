using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NewsLetterTableFormat.Controllers
{
    public class NewsLetterController : Controller
    {
        // GET: NewsLetter
        public ActionResult NewstoHTML()
        {
            return View();
        }
    }
}