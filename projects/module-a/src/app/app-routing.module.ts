import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CoreComponent } from './core/core.component';
import { Page1Component } from "./page1/page1.component";
import { EmptyComponent } from './empty/empty.component';

const appRoutes: Routes = [
    { path: 'module-a', component: CoreComponent, children: [
        { path: 'page1', component: Page1Component },
        { path: 'page2', loadChildren: "./page2/page2.module#Page2Module" },
      ]},
      { path: '**', component: EmptyComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash:true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}