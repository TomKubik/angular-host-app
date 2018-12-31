import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from "./page2.component";
import { Page2RoutingModule } from "./page2-routing.module";

@NgModule({
  imports: [
    CommonModule,
    Page2RoutingModule,
  ],
  declarations: [Page2Component],
  entryComponents: [Page2Component]
})
export class Page2Module { }