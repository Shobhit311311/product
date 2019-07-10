import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import{Routes,RouterModule} from '@angular/router';
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import {AddEmployeeComponent} from './app.addemployee';



@NgModule({
    imports: [
        BrowserModule,HttpClientModule,FormsModule
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }