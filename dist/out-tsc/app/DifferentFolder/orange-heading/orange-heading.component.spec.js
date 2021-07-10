import { TestBed } from '@angular/core/testing';
import { OrangeHeadingComponent } from './orange-heading.component';
describe('OrangeHeadingComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OrangeHeadingComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(OrangeHeadingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=orange-heading.component.spec.js.map