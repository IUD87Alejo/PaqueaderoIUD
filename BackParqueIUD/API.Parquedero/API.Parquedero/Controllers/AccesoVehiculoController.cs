using API.Parquedero.Context;
using API.Parquedero.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Parquedero.Controllers
{
    [Route("api/AccesoVehiculo")]
    [ApiController]
    public class AccesoVehiculoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AccesoVehiculoController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/<AccesoVehiculoController>
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(_context.accesoVehiculos.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            //return new string[] { "value1", "value2" };
        }

        // GET: api/<AccesoVehiculoController>/VistaAcceso
        [HttpGet("VistaAcceso")]
        public ActionResult GetVista()
        {
            try
            {
                return Ok(_context.v_Accesos.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            //return new string[] { "value1", "value2" };
        }

        // GET api/<AccesoVehiculoController>/5
        [HttpGet("{id}", Name = "GetAccesoVehiculo")]
        public ActionResult GetById(int id)
        {
            try
            {
                AccesoVehiculo accesoVehi = _context.accesoVehiculos.FirstOrDefault(x => x.idAcceso == id);
                return Ok(accesoVehi);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            //return "value";
        }

        // POST api/<AccesoVehiculoController>
        [HttpPost]
        public ActionResult Post([FromBody] AccesoVehiculo accesoVehiculo)
        {
            try
            {
                _context.accesoVehiculos.Add(accesoVehiculo);
                _context.SaveChanges();
                return CreatedAtRoute("GetAccesoVehiculo", new { id = accesoVehiculo.idAcceso }, accesoVehiculo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<AccesoVehiculoController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] AccesoVehiculo accesoVehiculo)
        {
            try
            {
                if (accesoVehiculo.idAcceso == id)
                {
                    _context.Entry(accesoVehiculo).State = EntityState.Modified;
                    _context.SaveChanges();
                    return CreatedAtRoute("GetAccesoVehiculo", new { id = accesoVehiculo.idAcceso }, accesoVehiculo);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<AccesoVehiculoController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                AccesoVehiculo accesoVehiculo = _context.accesoVehiculos.FirstOrDefault(x => x.idAcceso == id);
                if (accesoVehiculo != null)
                {
                    _context.accesoVehiculos.Remove(accesoVehiculo);
                    _context.SaveChanges();
                    return Ok(id);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
