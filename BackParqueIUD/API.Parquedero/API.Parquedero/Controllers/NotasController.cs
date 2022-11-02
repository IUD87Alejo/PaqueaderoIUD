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
    public class NotasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public NotasController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/<NotasController>
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(_context.notas.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            //return new string[] { "value1", "value2" };
        }

        // GET api/<NotasController>/5
        [HttpGet("{id}", Name = "GetNota")]
        public ActionResult GetById(int id)
        {
            try
            {
                Nota nota = _context.notas.FirstOrDefault(x => x.idNota == id);
                return Ok(nota);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            //return "value";
        }

        // POST api/<NotasController>
        [HttpPost]
        public ActionResult Post([FromBody] Nota nota)
        {
            try
            {
                _context.notas.Add(nota);
                _context.SaveChanges();
                return CreatedAtRoute("GetNota", new { id = nota.idNota }, nota);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<NotasController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Nota nota)
        {
            try
            {
                if (nota.idNota == id)
                {
                    _context.Entry(nota).State = EntityState.Modified;
                    _context.SaveChanges();
                    return CreatedAtRoute("GetNota", new { id = nota.idNota }, nota);
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

        // DELETE api/<NotasController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                Nota nota = _context.notas.FirstOrDefault(x => x.idNota == id);
                if (nota != null)
                {
                    _context.notas.Remove(nota);
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
