import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';

//import { SlideInPanelComponent } from './slideinpanel/slideinpanel.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
