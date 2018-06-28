import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { IdeaSearchComponent } from './idea-search/idea-search.component';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';
import { PageLandingComponent } from './page-landing/page-landing.component';
import { PageResultsComponent } from './page-results/page-results.component';

import { IdeaService } from './idea.service';

const appRoutes: Routes = [
  {
    path: 'results',
    component: PageResultsComponent
  },
  { 
    path: '',
    component: PageLandingComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    IdeaSearchComponent,
    IdeaListComponent,
    IdeaDetailComponent,
    PageLandingComponent,
    PageResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatInputModule,
    RouterModule.forRoot( appRoutes, {enableTracing: false} )
  ],
  providers: [ IdeaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
