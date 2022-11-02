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
    public class MensualidadController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MensualidadController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/<MensualidadController>
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(_context.mensualidades.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            //return new string[] { "value1", "value2" };
        }

        // GET api/<MensualidadController>/5
        [HttpGet("{id}", Name = "GetMensualidad")]
        public ActionResult GetById(int id)
        {
            try
            {
                Mensualidad mensualidad = _context.mensualidades.FirstOrDefault(x => x.idMensualidad == id);
                return Ok(mensualidad);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            //return "value";
        }

        // POST api/<MensualidadController>
        [HttpPost]
        public ActionResult Post([FromBody] Mensualidad mensualidad)
        {
            try
            {
                _context.mensualidades.Add(mensualidad);
                _context.SaveChanges();
                return CreatedAtRoute("GetMensualidad", new { id = mensualidad.idMensualidad }, mensualidad);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<MensualidadController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Mensualidad mensualidad)
        {
            try
            {
                if (mensualidad.idMensualidad == id)
                {
                    _context.Entry(mensualidad).State = EntityState.Modified;
                    _context.SaveChanges();
                    return CreatedAtRoute("GetMensualidad", new { id = mensualidad.idMensualidad }, mensualidad);
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

        // DELETE api/<MensualidadController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                Mensualidad mensualidad = _context.mensualidades.FirstOrDefault(x => x.idMensualidad == id);
                if (mensualidad != null)
                {
                    _context.mensualidades.Remove(mensualidad);
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
