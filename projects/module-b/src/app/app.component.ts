import { environment } from './../environments/environment';
import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'module-b',
  template: `
      <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {

  @Input('state') 
  set state(state: string) {
      console.debug('module-b received state', state);
  }

  @Output() message = new EventEmitter<any>();

  constructor(
    private router: Router) {
  }

  ngOnInit() {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
    
    // Standalone mode
    if (environment.standalone) {
      this.router.navigate(['/module-b/page1']);
    }
    
    // just for demonstration!
    setTimeout(() => { 
      this.message.next('client b initialized!');
    }, 2000);
    
  }
}
