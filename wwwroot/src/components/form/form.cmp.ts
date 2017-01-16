import {Component, HostBinding, ElementRef, Input} from '@angular/core';
import {FormModel} from './formModel';

@Component({
    selector: 'form',
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

    @Input('label-class') set labelClass(val:string) { this.formModel.labelClass = val; }
    @Input('control-class') set controlClass(val:string) { this.formModel.controlClass = val; }
}