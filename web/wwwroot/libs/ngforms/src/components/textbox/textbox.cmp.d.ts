import { EventEmitter } from '@angular/core';
import { FormModel } from '../ngform/formModel';
export declare class TextboxCMP {
    formModel: FormModel;
    constructor(formModel: FormModel);
    label: string;
    value: string;
    valueChange: EventEmitter<string>;
    multiline: boolean;
    password: boolean;
    debounceTime: number;
    debounceInvoke: EventEmitter<any>;
    required: boolean;
    private obs;
    private obsv;
    private subs;
    changeValue(val: string): void;
}
