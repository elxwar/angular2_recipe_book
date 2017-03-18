import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { AlertModule } from 'ng2-bootstrap/alert';
import { CollapseModule } from 'ng2-bootstrap/collapse';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    [ButtonsModule.forRoot()],
    [DropdownModule.forRoot()],
    [AlertModule.forRoot()],
    [CollapseModule.forRoot()],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
