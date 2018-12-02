import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { environment } from './../environments/environment';




import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import { WorksComponent } from './works/works.component';
import { WorkDetailComponent } from './works/work-detail/work-detail.component';
import { HeroComponent } from './main/hero/hero.component';


// MAIN_COMPONENTS
import { NavComponent } from './main/nav/nav.component';
import { FooterComponent } from './main/footer/footer.component';
import { SliderComponent } from './main/slider/slider.component';
import { ModalComponent } from './main/modal/modal.component';
import { SliderGifComponent } from './main/slider-gif/slider-gif.component';
import { PreviewComponent } from './main/preview/preview.component';
import { TouchSliderComponent } from './main/touch-slider/touch-slider.component';
import { GototopComponent } from 'app/main/gototop/gototop.component';


@NgModule({
  declarations: [
    AppComponent,
    WorksComponent,
    AboutComponent,
    NavComponent,
    FooterComponent,
    SliderComponent,
    ModalComponent,
    HeroComponent,
    SliderGifComponent,
    WorkDetailComponent,
    PreviewComponent,
    TouchSliderComponent,
    GototopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
