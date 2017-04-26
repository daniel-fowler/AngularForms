import { ElementRef } from '@angular/core';
import { FormModel } from './formModel';
export declare class FormCMP {
    private elRef;
    formModel: FormModel;
    constructor(elRef: ElementRef, formModel: FormModel);
    readonly formHorizontal: string;
    classLabel: string;
    classControl: string;
}
