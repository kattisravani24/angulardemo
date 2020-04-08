import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ManualComponent } from './manual/manual.component';
import { FormComponent } from './form/form.component';
import { TestComponent } from './test/test.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { ProprtyBindingComponent } from './proprty-binding/proprty-binding.component';
import { WishComponent } from './wish/wish.component';
import { StatesCitiesComponent } from './states-cities/states-cities.component';
import { NgClassEgComponent } from './ng-class-eg/ng-class-eg.component';



@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ManualComponent,
    FormComponent,
    TestComponent,
    StringInterpolationComponent,
    ProprtyBindingComponent,
    WishComponent,
    StatesCitiesComponent,
    NgClassEgComponent
  ], 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

