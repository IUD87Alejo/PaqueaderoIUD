using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Parquedero.Models
{
    public class Nota
    {
        [Key]
        public int idNota { get; set; }
        public int idAcceso { get; set; }
        public string nota { get; set; }
    }
}
