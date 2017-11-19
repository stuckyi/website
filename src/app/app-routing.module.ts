import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//page
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';

import { WorksComponent } from './works/works.component';
import { WorkDetailComponent } from './works/work-detail/work-detail.component';



const routes: Routes = [
  { path: '', redirectTo: '/works', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'works', component: WorksComponent },
  { path: 'detail/:id', component: WorkDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];