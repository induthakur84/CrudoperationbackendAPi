

// we can import httpclient module to send http request to the back apis

//Examples : it will provide to get, post , put, delte request to the backend api

import { HttpClient } from '@angular/common/http';


//import injectable decorator to the make (singleton depency injection)
import { Injectable } from '@angular/core';

//model
import { User } from '../models/user';

@Injectable({

//it means angular will create the only one instance of this service 
// and it will be used or available throughout the entire application.
  providedIn: 'root',
})

// this service is resposible for calling backend apis related to userr
export class Userservice {


  private apiUrl='https://localhost:7149/api/User';


  constructor(private http:HttpClient){}


  //GerUsers

  //this method call the api to retrive all users
  // here is sends to an http get request to the api
  // then api return an array of user

  getUsers(){


    //http.get<User[]> means the response will be an array of user objects

    //example
    //[
    //  { id:1, name:'ram', email}{ id:2, name:'ram', email}
    //]

    return this.http.get<User[]>(this.apiUrl)
  }

  //create user

  //it send request to backapi to create user


  createUser(user:User)
  {
// http.post<User> means api will return the created use 
    return this.http.post<User>(this.apiUrl, user)
  }



  //Delete User


  // this method call the detetes user in the id

  deleteUser(id: number){


    return this.http.delete(`${this.apiUrl}/${id}`);
  }


  //update User

  //this method updates an existing user
  // it send update user data to the respone to the api

 updateUser(user:User)
 {

  return this.http.put<User>(this.apiUrl, user);
 }

}

