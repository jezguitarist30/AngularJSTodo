using AngularJSTodo.Models;

namespace AngularJSTodo.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<AngularJSTodo.Models.TodoDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(AngularJSTodo.Models.TodoDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            var r = new Random();
            var items = Enumerable.Range(1, 50).Select(o => new Todos
            {
                DueDate = new DateTime(2012, r.Next(1, 12), r.Next(1, 28)),
                Priority = (byte) r.Next(10),
                Task = o.ToString()
            }).ToArray();

            context.Todos.AddOrUpdate(item => new {item.Task}, items);

        }
    }
}
