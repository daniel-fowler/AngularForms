import {Component, Input, Output, Directive, EventEmitter, ElementRef} from '@angular/core';

import {FormModel} from '../ngform/formModel';
import {html} from './ddl.html';

@Component({
    selector: 'ddl',
    template: html
})
export class DDLCMP {
    constructor(private elementRef: ElementRef,
                public formModel:FormModel) {
    }

    @Input() label: string = "";
    @Input() chooseText: string = '-- Choose --';

    @Input() list: any[] = null;
    @Input() value: any = null;
    @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
    
    @Output() selectedItemChange: EventEmitter<any> = new EventEmitter<any>();

    selectedItem: any = { id: <any>null, name: <any>null };
    chooseVal: any = null;

    ngOnChanges() {
        this.chooseVal = null;

        this.syncSelectedItem();

    }

    onValueChanged(value: any) {
        this.value = value;
        this.valueChange.emit(value);
        this.syncSelectedItem();
    }

    private syncSelectedItem() {
        var newSelectedItem: any = null;

        if (!this.list)
            return;

        
        if (this.value)
            newSelectedItem = this.list.find(l => l.id === this.value);

        if (this.selectedItem !== newSelectedItem) {
            this.selectedItem = newSelectedItem;
            this.selectedItemChange.emit(this.selectedItem);
        }
    }
}