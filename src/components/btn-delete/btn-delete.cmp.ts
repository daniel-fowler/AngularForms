import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import {html} from './btn-delete.html';

@Component({
    selector: 'btn-delete',
    template: html
})

export class BtnDeleteCMP {
    constructor() {
    }

    @Input() delete:((param?:any)=>Observable<any>) = null;
    @Input() param: any = null;
    @Input() confirm: boolean = true;
    @Input('confirm-msg') confirmMsg: string = 'Are you sure you want to delete this record?';

    isDeleting:boolean = false;
    isError: boolean = false;
    isSuccess: boolean = false;
    isEnabled: boolean = true;

    click(event:any) {
        if (!this.delete) {
            this.isError = true;
            return;
        }

        if (this.confirm) {
            var userIsSure = confirm(this.confirmMsg);

            if (!userIsSure)
                return;
        }

        this.isDeleting = true;
        this.isEnabled = false;
        var obs = this.delete(this.param);

        if(!obs)
        {
            this.onSuccess();
            return;
        }

        obs.do(null, this.onError, this.onSuccess)
           .subscribe();
    }

    onError()
    {
        this.isError = true;
        this.isEnabled = true;
    }

    onSuccess()
    {
        this.isSuccess = true;
        this.isEnabled = true;
    }
}