import { EventEmitter } from '@angular/core';
export declare class BtnBoolCMP {
    label: string;
    required: boolean;
    value: boolean;
    valueChange: EventEmitter<boolean>;
    changeValue(newVal: boolean): void;
}
