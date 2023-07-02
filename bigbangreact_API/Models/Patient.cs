using System.ComponentModel.DataAnnotations;

namespace TheBigBang2.Models
{
    public class Patient
    {
        [Key]
        public int Patientid { get; set; }
        public string? Pname { get; set; }
        public string? Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? BloodType { get; set; }
    }
}
