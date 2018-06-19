import {Component, Input, HostBinding, HostListener, Optional, Output, EventEmitter} from '@angular/core';

import {BtnMultiCMP} from '../btn-multi/btn-multi.cmp';
import {html} from './btn.html';
import {FormModel} from '../ngform/formModel';

@Component({
    selector: 'btn',
    template: html
})

export class BtnCMP {
    constructor(public formModel:FormModel,
                @Optional() protected btnMulti?: BtnMultiCMP) {
    }
    
    @HostBinding('attr.disabled') get disabled() { return this.busy ? true : null; }
    @HostBinding('style.pointer-events') get pointerEvents(){ return this.busy ? 'none': 'all'; }
    @HostBinding('class') get test() { return 'btn ' + this.class }

    @Input() value: any = null;
    @Input() busy: boolean = false;
    @Input() selectedClass: string = 'btn-success';
    @Input() set selected(isSelected: boolean) {
        if (isSelected && this.btnMulti)
            this.btnMulti.changeValue(this.value);
    };

    @Input() set negative(isNegative: boolean) {
        this.selectedClass = isNegative ? 'btn-danger' : 'btn-success';
    }

    @Input('class-selected') set classSelected(val:string) { this.selectedClass = val; }

    private _class:string = 'btn-default';
    @Input() set class(val: string) { this._class = val; }
    get class() {
        return this.selected ?
               this.selectedClass :
               this._class;
    }

    get selected() {
        return this.btnMulti 
               && this.value === this.btnMulti.value;
    }

    @HostListener('click')
    onClick() {
        if(this.busy)
            return;

        if (this.btnMulti)
            this.btnMulti.changeValue(this.value);
    }
}