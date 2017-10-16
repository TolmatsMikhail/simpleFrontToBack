import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GetdataserviceService } from './getdataservice.service'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GenresListComponent } from './genres-list/genres-list.component';

const appRoutes: Routes = [
  { path: 'book-list', component:  BooksListComponent},
  { path: 'genres-list', component:  GenresListComponent},
  // Empty way redirect to main and then define what is main
  { path: '', redirectTo: 'main', pathMatch : 'full' },
  // Here it is main - MainPageComponent
  { path: 'main', component: MainPageComponent },
  // Other ways lead us to emptyPage - PageNotFoundComponent
  { path: '**', component:  PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    MainPageComponent,
    PageNotFoundComponent,
    GenresListComponent    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )

  ],
  providers: [GetdataserviceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
