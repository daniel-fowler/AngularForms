import { ElementRef, EventEmitter } from '@angular/core';
export declare class CheckboxCMP {
    protected elRef: ElementRef;
    label: string;
    value: any;
    checked: any;
    checkedChange: EventEmitter<any>;
    readonly: boolean;
    selected: any;
    readonly isChecked: boolean;
    constructor(elRef: ElementRef);
    onCBChange(event: any): void;
}
