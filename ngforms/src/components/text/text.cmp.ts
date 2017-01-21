import {Component, Input} from '@angular/core';
import {FormModel} from '../ngform/formModel';
import {html} from './text.html';

@Component({
    selector: 'text',
    template: html
})

export class TextCMP {
    constructor(public formModel:FormModel)
    {
    }

    @Input() label: string = null;
    @Input() value: string = null;
}