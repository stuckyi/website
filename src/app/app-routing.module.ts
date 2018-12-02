import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//page
import { AppComponent } from './app.component';


import { WorksComponent } from './works/works.component';
import { WorkDetailComponent } from './works/work-detail/work-detail.component';



const routes: Routes = [
  { path: '', redirectTo: '/works', pathMatch: 'full' },
  { path: 'app', component: AppComponent, data: { state: 'app' } },
  { path: 'works', component: WorksComponent, data: { state: 'works' } },
  { path: 'detail/:id', component: WorkDetailComponent, data: { state: 'detail' } },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];