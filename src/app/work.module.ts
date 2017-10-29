import { RandomCharacterComponent } from './works/artlink/random-character/random-character.component';
import { JumpgameComponent } from './works/artlink/jumpgame/jumpgame.component';
import { CollectionComponent } from './works/collection/collection.component';
import { KohiBrochureComponent } from './works/kohi-brochure/kohi-brochure.component';
import { CodeStudyComponent } from './works/code-study/code-study.component';
import { CodedfontComponent } from './works/codedfont/codedfont.component';
import { TedComponent } from './works/ted/ted.component';



import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SliderComponent } from './main/slider/slider.component';
import { ModalComponent } from './main/modal/modal.component';


const routes: Routes = [
  { path: 'ted', component: TedComponent },
  { path: 'codedfont', component: CodedfontComponent },
  { path: 'codestudy', component: CodeStudyComponent },
  { path: 'kohi-brochure', component: KohiBrochureComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'jumpgame', component: JumpgameComponent },
  { path: 'random-character', component: RandomCharacterComponent }
];

const CORE_COMPONENTS = [
  SliderComponent,
  ModalComponent,
  TedComponent,
  CodedfontComponent,
  CodeStudyComponent,
  KohiBrochureComponent,
  CollectionComponent,
  JumpgameComponent,
  RandomCharacterComponent
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ CORE_COMPONENTS ],
  exports:[ CORE_COMPONENTS ]
})
export class WorkModule { }
