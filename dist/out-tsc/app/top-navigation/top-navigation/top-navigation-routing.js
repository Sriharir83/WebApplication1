import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavigationComponent } from './top-navigation.component';
const routes = [
    {
        path: '',
        component: TopNavigationComponent
    }
];
let TopNavigationRoutingModule = class TopNavigationRoutingModule {
};
TopNavigationRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], TopNavigationRoutingModule);
export { TopNavigationRoutingModule };
//# sourceMappingURL=top-navigation-routing.js.map