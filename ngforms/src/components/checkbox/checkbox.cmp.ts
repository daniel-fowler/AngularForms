import {Component, Input, ElementRef} from '@angular/core';

import {html} from './checkbox.html';

@Component({
    selector: 'checkbox',
    template: html
})

export class CheckboxCMP {
    @Input() value: string;
    @Input() label: string;
    @Input() selected: Array<string>;
    @Input() readonly: boolean = false;

    get isSelected() {
        var $checkbox = $("#chk", this.elRef.nativeElement);
        return this.selected && this.selected.find(id => id == $checkbox.val()) != undefined;
    };

    constructor(protected elRef: ElementRef) {

    }

    onCBChange(event: any) {
        if(!this.selected)
            return; 
            
        var cb = event.target;
        var isChecked = cb.checked;
        var itemId = cb.value;

        if (isChecked
            && !this.isSelected)
            this.selected.push(itemId);
        else if (!isChecked
            && this.isSelected)
            this.selected.splice(this.selected.indexOf(itemId), 1);
    }
}