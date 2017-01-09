import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http'
import { AppComponent }   from './app.component';

// custom modules
import { AppRoutingModule } from './app.routing.module'
import { RouterModule } from '@angular/router';
import { SharedModule} from './shared/shared.module'
import { ReviewModule} from './review/review.module'

var myModules:any[] = [AppRoutingModule,SharedModule,ReviewModule];

@NgModule({ 
  imports:      [ BrowserModule,RouterModule,FormsModule,HttpModule,myModules],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {  }