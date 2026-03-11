using Microsoft.EntityFrameworkCore;

namespace CrudoperationbackendAPi
{
    public class ApplicaitonDbContext:DbContext
    {
        public ApplicaitonDbContext(DbContextOptions<ApplicaitonDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
    }
}
