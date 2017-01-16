import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormModel} from '../form/formModel';

@Component({
    selector: 'textbox',
    templateUrl: 'src/components/textbox/textbox.html'
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