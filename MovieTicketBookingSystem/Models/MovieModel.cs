namespace MovieTicketBookingSystem.Models;


public class MovieModel
{
    public int id { get; set; }

    
    public byte[]? Image { get; set; }

    public string title { get; set; } = string.Empty;

    public string gener { get; set; } = string.Empty;

    public string duration { get; set; } = string.Empty;
}