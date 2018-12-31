import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div id="module-a">
      <div class="card">
        <div class="content">
          <a routerLink="page1">Landing page</a> | <a routerLink="page2">Lazy load page</a>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    #module-a { border: darkred dashed 5px; padding: 10px }
  `],
})
export class CoreComponent {
}
