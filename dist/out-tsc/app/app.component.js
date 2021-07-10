import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = "AppComponent";
        this.test = "testing";
    }
    ngOnInit() {
        console.log(this.customtitle);
        this.router.navigate(['/topnavigation']);
    }
    ngAfterInit() {
    }
};
__decorate([
    Input()
], AppComponent.prototype, "customtitle", void 0);
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map