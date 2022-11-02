using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Parquedero.Models
{
    public class Mensualidad
    {
        public int idMensualidad { get; set; }
        public decimal ValorPago { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
        public int idUsuario { get; set; }
    }
}
