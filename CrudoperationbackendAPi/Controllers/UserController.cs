using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CrudoperationbackendAPi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicaitonDbContext _applicaitonDbContext;

        public UserController(ApplicaitonDbContext applicaitonDbContext)
        {
            _applicaitonDbContext = applicaitonDbContext;
        }


        [HttpGet]   
        public IActionResult GetUsers()
        {
            var users= _applicaitonDbContext.Users.ToList();
            return Ok(users);
        }
        [HttpPost]
        public IActionResult CreateUser(User user)
        {
            _applicaitonDbContext.Users.Add(user);
            _applicaitonDbContext.SaveChanges();
            return Ok(user);
        }

        [HttpDelete("{id}")]

        public IActionResult DeleteUser(int id)
        {

            var user= _applicaitonDbContext.Users.Find(id);
            if (user == null)
            {

                return NotFound();
            }
            _applicaitonDbContext.Users.Remove(user);
            _applicaitonDbContext.SaveChanges();
            return NoContent();
        }
        [HttpPut]
        public IActionResult UpdateUser(User user)
        {
            var existingUser= _applicaitonDbContext.Users.FirstOrDefault(u => u.Id == user.Id);
            if (existingUser == null)
            {
                return NotFound();
            }
            existingUser.Name=user.Name;
            existingUser.Email=user.Email;
            _applicaitonDbContext.SaveChanges();
            return Ok(existingUser);
        }

    }
}
