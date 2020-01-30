using MailKit.Net.Smtp;
using MimeKit;
using MyWebsite.Models;
using System.Threading.Tasks;

namespace MyWebsite.EmailService
{
    public class MimeEmailSender : IMimeEmailSender
    {
        public async Task SendEmailAsync(Email email)
        {
            var mssg = new MimeMessage();
            mssg.From.Add(new MailboxAddress("Nemanja's website","neocortex992@gmail.com"));
            mssg.To.Add(new MailboxAddress("npr@3gproxy.com"));
            mssg.Subject = "Message";

            mssg.Body = new TextPart("html")
            {
                Text = string.Format("From: {0} <br> Company: {1} <br> Phone: {2} <br> Email address: {3} <br><br> {4}",
                (email.Name.Length > 0)? email.Name:"Not specified",
                (email.Company.Length > 0)? email.Name:"Not specified",
                (email.PhoneNumber.Length > 0)? email.Name:"Not specified",
                (email.EmailAddress.Length > 0)? email.Name:"Not specified",
                 email.Message)
            };

            using (var client = new SmtpClient())
            {
                // For demo-purposes, accept all SSL certificates (in case the server supports STARTTLS)
                client.ServerCertificateValidationCallback = (s, c, h, e) => true;

                 await client.ConnectAsync("smtp.gmail.com", 587, false).ConfigureAwait(false);

                // Note: only needed if the SMTP server requires authentication
                 await client.AuthenticateAsync("neocortex992@gmail.com", "fghrhgfu").ConfigureAwait(false);

                await client.SendAsync(mssg).ConfigureAwait(false);
                await client.DisconnectAsync(true).ConfigureAwait(false);
            }

        }
    }
}
