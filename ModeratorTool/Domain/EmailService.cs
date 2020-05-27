using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public interface IEmailSender
    {
        void Send();
    }
    public class EmailService : IEmailSender
    {
        public void Send()
        {
            throw new NotImplementedException();
        }
    }
}
