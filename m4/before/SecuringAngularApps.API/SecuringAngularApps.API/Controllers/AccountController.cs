using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SecuringAngularApps.API.Model;

namespace SecuringAngularApps.API.Controllers
{
    [Produces("application/json")]
    [Route("api/Account")]
    [Authorize(Roles = "Admin")]
    public class AccountController : Controller
    {
        private readonly ProjectDbContext _context;

        public AccountController(ProjectDbContext context)
        {
            _context = context;
        }

        [HttpGet("Users")]
        public IActionResult GetAllUsers()
        {
            var admins = _context.UserPermissions.Where(up => up.Value == "Admin").Select(up => up.UserProfileId).ToList();
            var users = _context.UserProfiles.Where(u => !admins.Contains(u.Id));
            return Ok(users);
        }

    }
}