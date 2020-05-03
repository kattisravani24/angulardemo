import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AccordionModule } from 'ngx-bootstrap/accordion';

import { EmpService } from './shared/emp.service';
import { DisplayService } from './shared/display.service';


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
import { ChartholderComponent } from './chartholder/chartholder.component';
import { PiechartComponent } from './charts/piechart/piechart.component';
import { WordcloudComponent } from './charts/wordcloud/wordcloud.component';
import { MapComponent } from './charts/map/map.component';
import { ColumnbarComponent } from './charts/columnbar/columnbar.component';
import { TreeComponent } from './charts/tree/tree.component';
import { FormemitterComponent } from './formemitter/formemitter.component';
import { FormlistenerComponent } from './formlistener/formlistener.component';
import { PrimecomponentsComponent } from './PrimeNG/primecomponents/primecomponents.component';

//PrimeNG
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {OrderListModule} from 'primeng/orderlist';
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';

import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UsingdisplayComponent } from './usingdisplay/usingdisplay.component'


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
    PostsComponent,
    ChartholderComponent,
    PiechartComponent,
    WordcloudComponent,
    MapComponent,
    ColumnbarComponent,
    TreeComponent,
    FormemitterComponent,
    FormlistenerComponent,
    PrimecomponentsComponent,
    NavbarComponent,
    UsingdisplayComponent
  ], 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //AccordionModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    // PrimeNG Modules
    CheckboxModule,
    TableModule,
    OrderListModule,
    AccordionModule,
    CardModule,
    CarouselModule,
    RouterModule.forRoot([
      {
        path: 'pipes',
        component: PipesComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'wish',
        component: WishComponent
      },
      {
        path: 'chart',
        component: ChartholderComponent
      },
      {
        path:'form',
        component:FormComponent
      }
    ])
  ],
  providers: [EmpService, DisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }