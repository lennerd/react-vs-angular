import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { BetterButtonDirective } from "./better-button.directive";
import { ContainerComponent } from './container/container.component';
import { DisableReasonButtonComponent } from './disable-reason-button/disable-reason-button.component';

@NgModule({
  declarations: [AppComponent, BetterButtonDirective, ContainerComponent, DisableReasonButtonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
