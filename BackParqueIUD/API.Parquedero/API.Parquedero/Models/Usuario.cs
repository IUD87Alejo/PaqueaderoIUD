using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Parquedero.Models
{
    public class Usuario
    {
        [Key]
        public int idUsuario { get; set; }

        public string Documento { get; set; }
        public string Nombre1 { get; set; }
        public string Nombre2 { get; set; }
        public string Apellido1 { get; set; }
        public string Apellido2 { get; set; }
        public string Celular { get; set; }
        public string Direccion { get; set; }
        public bool Estado { get; set; }
    }
}
