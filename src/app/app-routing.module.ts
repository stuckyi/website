import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//page
import { AppComponent } from './app.component';
import { WorksComponent } from './works/works.component';
import { AboutComponent } from './about/about.component';


import { TedComponent } from './works/ted/ted.component';
import { CodedfontComponent } from './works/codedfont/codedfont.component';
import { JumpgameComponent } from './works/artlink/jumpgame/jumpgame.component';
import { KohiBrochureComponent } from './works/kohi-brochure/kohi-brochure.component';
import { CodeStudyComponent } from './works/code-study/code-study.component';
import { RandomCharacterComponent } from './works/artlink/random-character/random-character.component';
import { CollectionComponent } from './works/collection/collection.component';



const routes: Routes = [
  { path: '', redirectTo: '/works', pathMatch: 'full' },
    { path: 'work', loadChildren: './work.module#WorkModule' },
    { path: 'app', component: AppComponent },
    { path: 'works', component: WorksComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];