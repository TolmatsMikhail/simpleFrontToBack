import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GetdataserviceService } from './getdataservice.service'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule

  ],
  providers: [GetdataserviceService],
  bootstrap: [AppComponent]
})

// const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent }
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
// ];

export class AppModule { }
