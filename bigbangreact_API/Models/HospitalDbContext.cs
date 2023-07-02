using TheBigBang2.Models;
using Microsoft.EntityFrameworkCore;

namespace TheBigBang2.Models
{
    public class HospitalDbContext : DbContext
    {
        public HospitalDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<User> Users { get; set; }
    }
}