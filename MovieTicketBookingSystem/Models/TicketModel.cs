using MovieTicketBookingSystem.Components.Pages;

namespace MovieTicketBookingSystem.Models
{
    public class TicketModel
    {
        
        public DateTime Date { get; set; }

        public string Time { get; set; } = string.Empty;

        public string Cinemas { get; set; } = string.Empty;

        public string Seats { get; set; } = string.Empty;

        public int BookingId { get; set; }

        
    }
}
