import {Component, HostBinding, ElementRef, Input} from '@angular/core';
import {FormModel} from './formModel';

@Component({
    selector: 'ngform',
    template: '<ng-content></ng-content>',
    providers: [
        FormModel
    ]
})
export class FormCMP
{
    constructor(private elRef:ElementRef,
                public formModel: FormModel)
    {
    }

    @HostBinding('class') get formHorizontal() { return 'form-horizontal'; }

    @Input('class-label') set classLabel(val:string) { this.formModel.labelClass = val; }
    @Input('class-control') set classControl(val:string) { this.formModel.controlClass = val; }
    @Input('autoValidate') set autoValidate(val:boolean) { this.formModel.autoValidate = val; }
}