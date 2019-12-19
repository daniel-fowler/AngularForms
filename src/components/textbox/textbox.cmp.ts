import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Observable, Subscriber, Subscription} from 'rxjs/Rx';
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
        this.debounceInvoke = new EventEmitter<string>();

        this.obs = new Observable<string>((obsv: Subscriber<string>) => this.obsv = obsv);
        this.subs = this.obs
                        .debounceTime(this.debounceTime)
                        .do(text => {
                            this.debounceInvoke.emit(text)
                        })
                        .subscribe(null, null, () => true);
    }

    @Input() label:string = null;    

    @Input() value: string = null;
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

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

    changeValue(val:string)
    {
        if(!val)
            val = null;

        this.value = val;
        this.valueChange.emit(this.value);
        this.obsv.next(this.value);
    }
}