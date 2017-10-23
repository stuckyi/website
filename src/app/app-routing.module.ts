import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//page
import { AppComponent } from './app.component';
import { WorksComponent } from './works/works.component';
import { AboutComponent } from './about/about.component';
import { WorkDetailComponent } from './works/work-detail/work-detail.component';
import { TedComponent } from './works/ted/ted.component';
import { CodedfontComponent } from './works/codedfont/codedfont.component';
import { JumpgameComponent } from './works/artlink/jumpgame/jumpgame.component';
import { KohiBrochureComponent } from './works/kohi-brochure/kohi-brochure.component';
import { CodeStudyComponent } from './works/code-study/code-study.component';
import { RandomCharacterComponent } from './works/artlink/random-character/random-character.component';
import { CollectionComponent } from './works/collection/collection.component';



const routes: Routes = [
    { path: '', redirectTo: '/works', pathMatch: 'full' },
    { path: 'app', component: AppComponent },
    { path: 'works', component: WorksComponent },
    { path: 'detail/:id', component: WorkDetailComponent, pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'works/ted', component: TedComponent },
    { path: 'works/codedfont', component: CodedfontComponent },
    { path: 'works/jumpgame', component: JumpgameComponent },
    { path: 'works/kohi-brochure', component: KohiBrochureComponent },
    { path: 'works/random-character', component: RandomCharacterComponent },
    { path: 'works/codestudy', component: CodeStudyComponent },
    { path: 'works/collection', component: CollectionComponent }
    // { path: 'source', component: SourceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];