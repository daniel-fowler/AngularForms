import {Component, EventEmitter, Output, Input} from '@angular/core';
import {html} from './btn-multi.html';
import {FormModel} from '../ngform/formModel';
import { IValidator } from '../ngform/iValidator';
import { ValidationModel } from '../ngform/validationModel';

@Component({
    selector: 'btn-multi',
    template: html,
    providers: [ValidationModel]
})

export class BtnMultiCMP {
    constructor(public formModel:FormModel,
                private validationModel: ValidationModel)
    {
    }

    @Input() label: string = null;

    @Input() value: any = null;
    @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

    //Validator
        private _validator:IValidator;
        
        @Input() set validator(value: IValidator)
        {
            this._validator = value;
            this.validationModel.validator = value;
        }

        get validator()
        {
            return this._validator;
        }

    @Input() loading: boolean = false;
    @Input() required: boolean = false;
    @Input() readonly: boolean = false;
    @Input('readonly-value') readonlyValue: string = null;

    changeValue(val: any) {
        this.value = val;
        this.valueChange.emit(val);
    }
}