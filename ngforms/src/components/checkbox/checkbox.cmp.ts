import {Component, Input, Output, ElementRef, EventEmitter} from '@angular/core';

import {html} from './checkbox.html';

@Component({
    selector: 'checkbox',
    template: html
})

export class CheckboxCMP {
    @Input() label: string;
    @Input() value: any;
    @Input() checked: any = null;
    @Output() checkedChange: EventEmitter<any> = new EventEmitter<any>();
    @Input() readonly: boolean = false;

    @Input() set selected(val:any) { this.checked = val  } //Deprecated

    get isChecked() : boolean {
        var $checkbox = $("#chk", this.elRef.nativeElement);
        return this.checked === true
               || (this.checked
                    && this.checked.constructor === Array 
                    && (<Array<any>>this.checked).find(id => id == $checkbox.val()) != undefined);
    };

    constructor(protected elRef: ElementRef) {

    }

    onCBChange(event: any) {
        if(this.checked === null)
            return; 

        var cb = event.target;
        var isChecked = cb.checked;

        if(this.checked && this.checked.constructor === Array)
        {
            var itemId = cb.value;

            if (isChecked
                && !this.isChecked)
                this.checked.push(itemId);
            else if (!isChecked
                && this.isChecked)
                this.checked.splice(this.checked.indexOf(itemId), 1);

            return;
        }            

        this.checked = isChecked;
        this.checkedChange.emit(this.checked);
    }
}