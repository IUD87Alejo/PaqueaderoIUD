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
    public class CeldaController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CeldaController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/<CeldaController>
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(_context.celdas.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            //return new string[] { "value1", "value2" };
        }

        // GET api/<CeldaController>/5
        [HttpGet("{id}", Name = "GetCelda")]
        public ActionResult GetById(int id)
        {
            try
            {
                Celdas celdas = _context.celdas.FirstOrDefault(x => x.idCelda == id);
                return Ok(celdas);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            //return "value";
        }

        // POST api/<CeldaController>
        [HttpPost]
        public ActionResult Post([FromBody] Celdas celdas)
        {
            try
            {
                _context.celdas.Add(celdas);
                _context.SaveChanges();
                return CreatedAtRoute("GetCelda", new { id = celdas.idCelda }, celdas);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<CeldaController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Celdas celdas)
        {
            try
            {
                if (celdas.idCelda == id)
                {
                    _context.Entry(celdas).State = EntityState.Modified;
                    _context.SaveChanges();
                    return CreatedAtRoute("GetCelda", new { id = celdas.idCelda }, celdas);
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

        // DELETE api/<CeldaController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                Celdas celdas = _context.celdas.FirstOrDefault(x => x.idCelda == id);
                if (celdas != null)
                {
                    _context.celdas.Remove(celdas);
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
