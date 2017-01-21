import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormModel} from '../ngform/formModel';
import {html} from './textbox.html';

@Component({
    selector: 'textbox',
    template: html
})
export class TextboxCMP
{
    constructor(public formModel:FormModel)
    {
    }

    @Input() label:string = null;    

    @Input() value: string = null;
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

    @Input() multiline: boolean = false;

    changeValue(val:string)
    {
        this.value = val;
        this.valueChange.emit(this.value);
    }
}