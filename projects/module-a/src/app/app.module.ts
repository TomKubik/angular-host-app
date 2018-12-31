import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { Page1Component } from './page1/page1.component';
import { EmptyComponent } from './empty/empty.component';
import { ClientAWidgetComponent } from './module-a-widget/module-a-widget.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreComponent } from './core/core.component';
import { PushPipe } from './push.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    Page1Component,
    EmptyComponent,
    ClientAWidgetComponent,
    CoreComponent,
    PushPipe
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    AppComponent,
    ClientAWidgetComponent
  ]
})
export class AppModule { 

  constructor(injector: Injector) {
    const appElement = createCustomElement(AppComponent, { injector })
    customElements.define('module-a', appElement);

    const widgetElement = createCustomElement(ClientAWidgetComponent, { injector })
    customElements.define('module-a-widget', widgetElement);
  }

  ngDoBootstrap() {}
}
