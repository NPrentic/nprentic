using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyWebsite.Controllers
{
    public class ResumeController : Controller
    {
        //GET api/resume/download
        [HttpGet(), Route("api/resume/download")]
        public IActionResult GetResume()
        {
            string path = @"..\MyWebsite\wwwroot\Nemanja Prentić - Resume.pdf";

            var stream = new FileStream(path, FileMode.Open);

            if (stream == null) return NotFound();

            return new FileStreamResult(stream, "application/pdf");
        }
    }
}
