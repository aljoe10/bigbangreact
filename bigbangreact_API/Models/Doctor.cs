using System.ComponentModel.DataAnnotations;

namespace TheBigBang2.Models
{
    public class Doctor
    {
        [Key]
        public int Doctorid { get; set; }
        public string? Dname { get; set; }
        public string? Specialization { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string Status { get; set; } = "Active";

    }
}
