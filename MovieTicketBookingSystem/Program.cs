using MovieTicketBookingSystem.Components;
using MudBlazor.Services;

var builder = WebApplication.CreateBuilder(args);

// Add Razor Components
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

// Add MudBlazor
builder.Services.AddMudServices();

// Add HttpClient
builder.Services.AddHttpClient();

var app = builder.Build();

// Configure the HTTP request pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseAntiforgery();

app.MapStaticAssets();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();