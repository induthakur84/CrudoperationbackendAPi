

//bootstrapapplication is used to start (bootstrap) the angular app
//it load the root compoent and the initializes the application

import { bootstrapApplication } from '@angular/platform-browser';


//AppConfig contain global configuration like http client setup etc

import { appConfig } from './app/app.config';


//App is the ROOt Component of the angular application

// this is the first ui/component angular loads when the app starts
import { App } from './app/app';



//load the root component(app)

//applies here global configuration
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
