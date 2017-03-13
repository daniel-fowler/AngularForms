import { ElementRef } from '@angular/core';
export declare class CheckboxCMP {
    protected elRef: ElementRef;
    value: string;
    label: string;
    selected: Array<string>;
    readonly: boolean;
    readonly isSelected: boolean;
    constructor(elRef: ElementRef);
    onCBChange(event: any): void;
}
