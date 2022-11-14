using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Parquedero.Models
{
    public class AccesoVehiculo
    {
        [Key]
        public int idAcceso { get; set; }
        public DateTime FechaIngreso { get; set; }
        public DateTime FechaSalida { get; set; }
        public int idVehiculo { get; set; }
        public int idCelda { get; set; }
    }
}
