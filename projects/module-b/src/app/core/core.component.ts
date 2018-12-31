import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div id="module-b">
      <div class="card">
        <div class="content">
          <a routerLink="page1">Landing page</a> | <a routerLink="page2">Page containing widget from different module</a>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    #module-b { border: navy dashed 5px; padding: 10px }
  `],
})
export class CoreComponent {
}
