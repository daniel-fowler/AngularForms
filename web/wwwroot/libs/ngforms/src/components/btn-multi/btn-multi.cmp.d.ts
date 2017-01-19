import { EventEmitter } from '@angular/core';
import { FormModel } from '../form/formModel';
export declare class BtnMultiCMP {
    formModel: FormModel;
    constructor(formModel: FormModel);
    label: string;
    value: any;
    valueChange: EventEmitter<any>;
    loading: boolean;
    required: boolean;
    readonly: boolean;
    readonlyValue: string;
    changeValue(val: any): void;
}
