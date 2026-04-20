import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';

import { AppComponent } from './app.component';
import { KanbanComponent } from '@syncfusion/ej2-angular-kanban';

@NgModule({
  declarations: [
    AppComponent   // declare your own components here
  ],
  imports: [
    BrowserModule,
    KanbanComponent,
    DropDownListComponent,
    TextBoxComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
