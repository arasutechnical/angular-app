import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TaskComponent } from './tasks/tasks.component';

import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TaskService,HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }