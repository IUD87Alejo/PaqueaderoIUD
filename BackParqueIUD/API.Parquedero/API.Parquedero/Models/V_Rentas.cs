using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Parquedero.Models
{
    public class V_Rentas
    {
        [Key]
        public int idMensualidad { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
        public int idUsuario { get; set; }
        public string Nombre { get; set; }
    }
}
