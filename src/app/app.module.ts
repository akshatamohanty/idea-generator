import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IdeaSearchComponent } from './idea-search/idea-search.component';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    IdeaSearchComponent,
    IdeaListComponent,
    IdeaDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
