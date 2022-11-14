using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Parquedero.Models
{
    public class Celdas
    {
        [Key]
        public int idCelda { get; set; }
        public bool Estado { get; set; }
    }
}
