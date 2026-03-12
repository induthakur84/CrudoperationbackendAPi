import { Routes } from '@angular/router';
import { Userlist } from './users/userlist/userlist';

export const routes: Routes = [
//route configuration object

    {
        

        //path '' meand the default route(home page)

        // when user open http://localhost:4200/
        // that time angular will load the userlist component
        path:'',

        //component specified
        component:Userlist
    }
];
