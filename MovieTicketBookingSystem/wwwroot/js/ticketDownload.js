
window.downloadTicket = (ticket, fileName) => {
    const escapeHtml = (value) =>
        String(value ?? "").replace(/[&<>"']/g, char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[char]);

    const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Movie Ticket ${escapeHtml(ticket.ticketId)}</title>
    <style>
        body {
            background: #121212;
            color: white;
            font-family: Arial, sans-serif;
            padding: 30px;
        }
        .ticket {
            max-width: 420px;
            margin: auto;
            padding: 25px;
            border: 2px solid #D4A017;
            border-radius: 12px;
        }
        h2 { color: #D4A017; }
        img {
            width: 180px;
            height: 180px;
        }
    </style>
</head>
<body>
    <div class="ticket">
        <h2>MOVIE TICKET</h2>
        <p><b>Booking ID:</b> ${escapeHtml(ticket.bookingId)}</p>
        <h3>${escapeHtml(ticket.movieName)}</h3>
        <p><b>Date:</b> ${escapeHtml(ticket.date)}</p>
        <p><b>Time:</b> ${escapeHtml(ticket.time)}</p>
        <p><b>Cinema:</b> ${escapeHtml(ticket.cinemas)}</p>
        <p><b>Seats:</b> ${escapeHtml(ticket.seats)}</p>
        <p><b>Ticket ID:</b> ${escapeHtml(ticket.ticketId)}</p>
        <img src="${ticket.qrImage}" alt="Ticket QR Code">
        <p>Keep this ticket for entry.</p>
    </div>
</body>
</html>`;

    const blob = new Blob([html], {
        type: "text/html;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
};
