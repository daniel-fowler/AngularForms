import { EventEmitter } from '@angular/core';
export declare class BtnMultiCMP {
    label: string;
    value: any;
    valueChange: EventEmitter<any>;
    loading: boolean;
    required: boolean;
    readonly: boolean;
    readonlyValue: string;
    changeValue(val: any): void;
}
