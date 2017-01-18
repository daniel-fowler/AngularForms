import {Component, EventEmitter, Output, Input} from '@angular/core';
import {html} from './btn-multi.html';

@Component({
    selector: 'btn-multi',
    template: html
})

export class BtnMultiCMP {

    @Input() label: string = null;

    @Input() value: any = null;
    @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

    @Input() loading: boolean = false;
    @Input() required: boolean = false;
    @Input() readonly: boolean = false;
    @Input('readonly-value') readonlyValue: string = null;

    changeValue(val: any) {
        this.value = val;
        this.valueChange.emit(val);
    }
}