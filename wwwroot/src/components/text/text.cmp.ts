import {Component, Input} from '@angular/core';
import {FormModel} from '../form/formModel';

@Component({
    selector: 'text',
    templateUrl: 'src/components/text/text.html'
})

export class TextCMP {
    constructor(public formModel:FormModel)
    {
    }

    @Input() label: string = null;
    @Input() value: string = null;
}