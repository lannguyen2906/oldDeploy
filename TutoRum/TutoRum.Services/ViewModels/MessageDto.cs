﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TutoRum.Services.ViewModels
{
        public class MessageRequest
        {
            public string Title { get; set; }
            public string Body { get; set; }
            public string DeviceToken { get; set; }
        }
}
