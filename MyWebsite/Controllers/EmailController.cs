using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using MyWebsite.EmailService;
using MyWebsite.Models;

namespace MyWebsite.Controllers
{
    public class EmailController : Controller
    {
        private readonly IMimeEmailSender emailSender;

        public EmailController(IMimeEmailSender emailSender)
        {
            this.emailSender = emailSender;
        }

        [HttpPost, Route("api/send/email")]
        public async Task<IActionResult> SendEmail([FromBody] Email email)
        {
             await this.emailSender.SendEmailAsync(email);

            return Ok();
        }
    }
}
