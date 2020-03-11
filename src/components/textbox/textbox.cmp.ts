import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Observable, Subscriber, Subscription} from 'rxjs/Rx';
import {FormModel} from '../ngform/formModel';
import {html} from './textbox.html';
import { ValidationModel } from "../ngform/validationModel";
import { IValidator } from "../ngform/iValidator";

@Component({
    selector: 'textbox',
    template: html,
    providers: [ValidationModel]
})
export class TextboxCMP
{
    constructor(public formModel:FormModel,
                private validationModel: ValidationModel)
    {
        this.debounceInvoke = new EventEmitter<string>();

        this.validatorObs = new Observable<string>((obsv: Subscriber<string>) => this.validatorObsv = obsv);
        this.validatorSub = this.validatorObs
                                .debounceTime(1000)
                                .do(text => {
                                    if(this.formModel 
                                        && this.formModel.autoValidate 
                                        && this.validator)
                                        this.validator.validate();
                                })
                                .subscribe(null, null, () => true);

        this.obs = new Observable<string>((obsv: Subscriber<string>) => this.obsv = obsv);
        this.subs = this.obs
                        .debounceTime(this.debounceTime)
                        .do(text => {
                            this.debounceInvoke.emit(text)
                        })
                        .subscribe(null, null, () => true);
    }

    @Input() label:string = null;
    @Input() type:string = "text";

    private _value:string = null;
    @Input() set value(val: string){
        var valueChanged = val != this._value;

        this._value = val;

        if(valueChanged)
            this.validatorObsv.next(val);
    }
    get value()
    {
        return this._value;
    }

    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

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

    @Input() multiline: boolean = false;
    @Input() password: boolean = false;

    @Input('debounce-time') debounceTime: number = 400;
    @Output('debounce-invoke') debounceInvoke: EventEmitter<any> = null;

    @Input() required: boolean = false;
    @Input() readonly: boolean = false;

    @Input() placeholder:string = null;

    @Input() error:boolean = false;

    private obs: Observable<string> = null;
    private obsv: Subscriber<string> = null;
    private subs: Subscription = null;

    private validatorObs: Observable<string> = null;
    private validatorObsv: Subscriber<string> = null;
    private validatorSub: Subscription = null;

    changeValue(val:string)
    {
        if(!val)
            val = null;

        this.value = val;
        this.valueChange.emit(this.value);
        this.obsv.next(this.value);
    }

    onFocusout()
    {
        if(this.formModel
            && this.formModel.autoValidate 
            && this.validator)
            this.validator.validate();
    }
}