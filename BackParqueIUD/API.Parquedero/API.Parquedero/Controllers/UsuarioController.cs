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
    public class UsuarioController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsuarioController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/<UsuarioController>
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(_context.usuarios.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            //return new string[] { "value1", "value2" };
        }

        // GET api/<UsuarioController>/5
        [HttpGet("{id}", Name ="GetUsuario")]
        public ActionResult GetById(int id)
        {
            try
            {
                Usuario usuario = _context.usuarios.FirstOrDefault(x => x.idUsuario == id);
                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            //return "value";
        }

        // POST api/<UsuarioController>
        [HttpPost]
        public ActionResult Post([FromBody] Usuario usuario)
        {
            try
            {
                _context.usuarios.Add(usuario);
                _context.SaveChanges();
                return CreatedAtRoute("GetUsuario", new { id = usuario.idUsuario }, usuario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<UsuarioController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Usuario usuario)
        {
            try
            {
                if(usuario.idUsuario == id)
                {
                    _context.Entry(usuario).State = EntityState.Modified;
                    _context.SaveChanges();
                    return CreatedAtRoute("GetUsuario", new { id = usuario.idUsuario }, usuario);
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

        // DELETE api/<UsuarioController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                Usuario usuario = _context.usuarios.FirstOrDefault(x => x.idUsuario == id);
                if(usuario != null)
                {
                    _context.usuarios.Remove(usuario);
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
