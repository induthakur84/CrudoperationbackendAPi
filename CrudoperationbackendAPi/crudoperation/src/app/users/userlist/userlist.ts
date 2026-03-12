

// here we import component decorator 
import { Component } from '@angular/core';



//FormModule is need to use  [(ngModel)] in the two way data binding in the html form
import { FormsModule } from '@angular/forms';

import { Userservice } from '../../services/userservice';
import { User } from '../../models/user';


//@component tell angular: this class is a component (a piece of ui)

@Component({
  selector: 'app-userlist',  //html tag: <app-userlist> used in other template

  standalone:true, //no ngmodule needed
  // (angular 15+ version feature)

  imports: [FormsModule],  

  templateUrl: './userlist.html',
  styleUrl: './userlist.css',
})
export class Userlist {
  
// we can store the list of user fetch from the api
users:User[]=[];


//we can when we editing the user that value hold that user; null means wer are adding new mode

editingUser:User |null=null;

//Input fields in the form 
formName='';
formEmail='';

//message shown here to the user after the action

successMsg='';
errorMsg='';


  
constructor(private userService :Userservice){}

}
