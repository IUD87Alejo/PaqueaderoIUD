
namespace API.Parquedero.Context
{
    using API.Parquedero.Models;
    using Microsoft.EntityFrameworkCore;

    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        {

        }

        public DbSet<Usuario> usuarios { get; set; }
        public DbSet<Vehiculo> vehiculos { get; set; }
        public DbSet<Mensualidad> mensualidades { get; set; }
        public DbSet<Celdas> celdas { get; set; }
        public DbSet<AccesoVehiculo> accesoVehiculos { get; set; }
        public DbSet<Nota> notas { get; set; }
        public DbSet<V_Accesos> v_Accesos { get; set; }
        public DbSet<V_Rentas> v_Rentas { get; set; }
    }
}
