using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Parquedero.Models
{
    public class Nota
    {
        public int idNota { get; set; }
        public int idCelda { get; set; }
        public string Nota { get; set; }
    }
}
