using CrudoperationbackendAPi;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddDbContext<ApplicaitonDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DbContext")));

//What is cors(Cross-Origin Resource Sharing) ?

// it is the services to the application that helps or that allow a frontend applicaiton(angular, react) that running 

// in the different domain/port 4200 to access the backend api


builder.Services.AddCors(options =>


// we can make the policy that named call "AllowAngular"

//A policy is a set of rules that defines which external application can access the backend api

     options.AddPolicy("AllowAngular",
     
     policy=>

     policy.WithOrigins("http://localhost:4200")

     //"http://localhost:4289")
     // its allow the all the http header(Authroization)

     //it allow to send header like json or authentication token


     .AllowAnyHeader()



     // Allow all the http method can be access mean

     // you are able to get: REad data
     //Post: Insert Data
     //Put: update data
     //Delete: delte the user
     .AllowAnyMethod()
     )


    );






// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


// this is a middle check the incoming request is allowed according the cors polites.
// if the request matche the politcy
// then allow that request

app.UseCors("AllowAngular");

app.UseAuthorization();

app.MapControllers();

app.Run();
