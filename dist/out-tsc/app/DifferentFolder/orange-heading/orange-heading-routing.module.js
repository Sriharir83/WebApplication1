import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrangeHeadingComponent } from './orange-heading.component';
const routes = [
    {
        path: '',
        component: OrangeHeadingComponent
    }
];
let OrangeHeadingRoutingModule = class OrangeHeadingRoutingModule {
};
OrangeHeadingRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], OrangeHeadingRoutingModule);
export { OrangeHeadingRoutingModule };
//# sourceMappingURL=orange-heading-routing.module.js.map