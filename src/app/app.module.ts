

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { WorksComponent } from './works/works.component';
import { AboutComponent } from './about/about.component';

import { NavComponent } from './main/nav/nav.component';
import { TedComponent } from './works/ted/ted.component';
import { CodedfontComponent } from './works/codedfont/codedfont.component';
import { JumpgameComponent } from './works/artlink/jumpgame/jumpgame.component';
import { RandomCharacterComponent } from './works/artlink/random-character/random-character.component';
import { KohiBrochureComponent } from './works/kohi-brochure/kohi-brochure.component';
import { CodeStudyComponent } from './works/code-study/code-study.component';
import { CollectionComponent } from './works/collection/collection.component';
import { FooterComponent } from './main/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    WorksComponent,
    AboutComponent,
    
    NavComponent,
    TedComponent,
    CodedfontComponent,
    JumpgameComponent,
    RandomCharacterComponent,
    KohiBrochureComponent,
    CodeStudyComponent,
    CollectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
