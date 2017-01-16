import {Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
    selector: 'btn-multi',
    templateUrl: 'src/components/btn-multi/btn-multi.html'
})

export class BtnMultiCMP {

    @Input() label: string = null;

    @Input() value: any = null;
    @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

    @Input() loading: boolean = false;
    @Input() required: boolean = false;
    @Input() readonly: boolean = false;
    @Input('readonly-value') readonlyValue: string = null;

    changeValue(val: any) {
        this.value = val;
        this.valueChange.emit(val);
    }
}