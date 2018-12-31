import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    constructor(private router: Router) {
    }

    config = {
        "module-a": {
            loaded: false,
            path: 'module-a/main.js',
            element: 'module-a'
        },
        "module-b": {
            loaded: false,
            path: 'module-b/main.js',
            element: 'module-b'
        }
    };

    ngOnInit() {
    }

    navigateTo(module: string, url: string): void {
        this.load(module);
        this.router.navigateByUrl(url);
    }

    load(name: string): void {

        const configItem = this.config[name];
        const content = document.getElementById('content');
        content.innerHTML = "";

        if (!configItem.loaded) {
            content.appendChild(this.createScript(configItem.path));
        }

        const element: HTMLElement = document.createElement(configItem.element);
        content.appendChild(element);

        configItem.loaded = true;
    }

    createScript(path: string) {
        const script = document.createElement('script');
        script.src = path;
        script.onerror = () => console.error(`error loading ${path}`);
        return script;
    }

    handleMessage(msg): void {
        console.debug('shell received message: ', msg.detail);
    }
}
