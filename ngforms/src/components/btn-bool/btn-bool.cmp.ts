import {Component, Input, Output, EventEmitter} from '@angular/core';

import {html} from './btn-bool.html';

@Component({
    selector: 'btn-bool',
    template: html
})
export class BtnBoolCMP
{
    @Input() label:string = null;
    @Input() required:boolean = false;
    @Input() value: boolean = null;
    @Output() valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    changeValue(newVal :boolean)
    {
        this.value = newVal;
        this.valueChange.emit(this.value);
    }
}