import { EventEmitter, ElementRef } from '@angular/core';
import { FormModel } from '../ngform/formModel';
export declare class DDLCMP {
    private elementRef;
    formModel: FormModel;
    constructor(elementRef: ElementRef, formModel: FormModel);
    label: string;
    chooseText: string;
    list: any[];
    value: any;
    valueChange: EventEmitter<any>;
    selectedItemChange: EventEmitter<any>;
    required: boolean;
    selectedItem: any;
    chooseVal: any;
    ngOnChanges(): void;
    onValueChanged(value: any): void;
    private syncSelectedItem();
}
