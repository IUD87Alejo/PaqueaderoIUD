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
    [Route("api/[controller]")]
    [ApiController]
    public class VehiculoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public VehiculoController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/<VehiculoController>
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(_context.vehiculos.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            //return new string[] { "value1", "value2" };
        }

        // GET api/<VehiculoController>/5
        [HttpGet("{id}", Name = "GetVehiculo")]
        public ActionResult GetById(int id)
        {
            try
            {
                Vehiculo vehiculo = _context.vehiculos.FirstOrDefault(x => x.idVehiculo == id);
                return Ok(vehiculo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            //return "value";
        }

        // POST api/<VehiculoController>
        [HttpPost]
        public ActionResult Post([FromBody] Vehiculo vehiculo)
        {
            try
            {
                _context.vehiculos.Add(vehiculo);
                _context.SaveChanges();
                return CreatedAtRoute("GetVehiculo", new { id = vehiculo.idVehiculo }, vehiculo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<VehiculoController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Vehiculo vehiculo)
        {
            try
            {
                if (vehiculo.idVehiculo == id)
                {
                    _context.Entry(vehiculo).State = EntityState.Modified;
                    _context.SaveChanges();
                    return CreatedAtRoute("GetVehiculo", new { id = vehiculo.idVehiculo }, vehiculo);
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

        // DELETE api/<VehiculoController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                Vehiculo vehiculo = _context.vehiculos.FirstOrDefault(x => x.idVehiculo == id);
                if (vehiculo != null)
                {
                    _context.vehiculos.Remove(vehiculo);
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
