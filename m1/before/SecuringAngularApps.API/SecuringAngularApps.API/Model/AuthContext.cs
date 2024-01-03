using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;

namespace SecuringAngularApps.API.Model
{
    public class AuthContext
    {
        public List<SimpleClaim> Claims { get; set; }
        public UserProfile UserProfile { get; set; }
    }
}
