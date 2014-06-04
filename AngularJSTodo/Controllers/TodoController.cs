using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using AngularJSTodo.Models;

namespace AngularJSTodo.Controllers
{
    public class TodoController : ApiController
    {
        private TodoDbContext db = new TodoDbContext();

        // GET api/Todo
        //public IEnumerable<Todos> GetTodos()
        //{
        //    return db.Todos.AsEnumerable();
        //}
        public IEnumerable<Todos> GetTodos(string q = null, string sort = null, bool desc = false, int? limit = null, int offset = 0)
        {
            var list = ((IObjectContextAdapter)db).ObjectContext.CreateObjectSet<Todos>();

            IQueryable<Todos> items = string.IsNullOrEmpty(sort) ? list.OrderBy(o => o.Priority)
                : list.OrderBy(String.Format("it.{0} {1}", sort, desc ? "DESC" : "ASC"));

            if (!string.IsNullOrEmpty(q) && q != "undefined") items = items.Where(t => t.Task.Contains(q));

            if (offset > 0) items = items.Skip(offset);
            if (limit.HasValue) items = items.Take(limit.Value);

            return items;
        }


        // GET api/Todo/5
        public Todos GetTodos(int id)
        {
            Todos todos = db.Todos.Find(id);

            if (todos == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return todos;
        }

        // PUT api/Todo/5
        public HttpResponseMessage PutTodos(int id, Todos todos)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            if (id != todos.Id)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            db.Entry(todos).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // POST api/Todo
        public HttpResponseMessage PostTodos(Todos todos)
        {
            if (ModelState.IsValid)
            {
                db.Todos.Add(todos);
                db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, todos);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = todos.Id }));
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // DELETE api/Todo/5
        public HttpResponseMessage DeleteTodos(int id)
        {
            Todos todos = db.Todos.Find(id);
            if (todos == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.Todos.Remove(todos);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK, todos);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}