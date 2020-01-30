using MyWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebsite.EmailService
{
    public interface IMimeEmailSender
    {
        Task SendEmailAsync(Email email);
    }
}
