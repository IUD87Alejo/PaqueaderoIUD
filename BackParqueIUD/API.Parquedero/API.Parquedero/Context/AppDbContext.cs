using API.Parquedero.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Parquedero.Context
{
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
    }
}
