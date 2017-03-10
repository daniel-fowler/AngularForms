import { EventEmitter } from '@angular/core';
import { FormModel } from '../ngform/formModel';
export declare class TextboxCMP {
    formModel: FormModel;
    constructor(formModel: FormModel);
    label: string;
    value: string;
    valueChange: EventEmitter<string>;
    multiline: boolean;
    debounceTime: number;
    debounceInvoke: EventEmitter<any>;
    private obs;
    private obsv;
    private subs;
    changeValue(val: string): void;
}
