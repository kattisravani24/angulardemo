import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgstyleComponent } from './ngStyle/ngstyle.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { NgmodelComponent } from './ngmodel/ngmodel.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NgmodelchildComponent } from './ngmodelchild/ngmodelchild.component';
import { NgmodelchildtwoComponent } from './ngmodelchildtwo/ngmodelchildtwo.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpService } from './shared/emp.service';
import {HttpClientModule} from '@angular/common/http';
import { PipesComponent } from './pipes/pipes.component';
import { AhComponent } from './ah/ah.component';
import { ReverseStr } from './myPipes/reverseStr';
import { ReverseArray } from './myPipes/reverseArr';
import { RemoveDuplicates } from './myPipes/removeDups';
import { MoviesComponent } from './movies/movies.component';
import { FilterPipe } from './myPipes/filterPipe';
import { AddmovieComponent } from './movies/addmovie/addmovie.component';
import { SearchmovieComponent } from './movies/searchmovie/searchmovie.component';
import { MovielistComponent } from './movies/movielist/movielist.component';
import { NgcontainerComponent } from './ngcontainer/ngcontainer.component';
import { TemplatereferenceComponent } from './templatereference/templatereference.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { FirstDirective } from './shared/first.directive';
import { UseDirectiveComponent } from './shared/use-directive/use-directive.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { PostsComponent } from './posts/posts.component';


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
    NgClassEgComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgstyleComponent,
    EventbindingComponent,
    NgmodelComponent,
    ParentComponent,
    ChildComponent,
    NgmodelchildComponent,
    NgmodelchildtwoComponent,
    EmpListComponent,
    EmpDetailsComponent,
    PipesComponent,
    AhComponent,
    ReverseStr,
    ReverseArray,
    RemoveDuplicates,
    FilterPipe,
    MoviesComponent,
    AddmovieComponent,
    SearchmovieComponent,
    MovielistComponent,
    NgcontainerComponent,
    TemplatereferenceComponent,
    NgcontentComponent,
    FirstDirective,
    UseDirectiveComponent,
    ReactiveformsComponent,
    PostsComponent
  ], 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

