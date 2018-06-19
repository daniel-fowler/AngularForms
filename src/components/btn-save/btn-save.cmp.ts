import {Component, Input, Inject, forwardRef} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import {html} from './btn-save.html'

@Component({
    selector: 'btn-save',
    template: html,
    host: {
        '(click)':'onClick()'
    }
})
export class BtnSaveCMP {
    @Input() save: any;
    @Input() param: any = null;
    @Input() enabled: boolean = true;
    @Input() text:string = 'Save';
    @Input() savingText: string = 'Saving...';
    @Input() content: boolean = false;
    @Input() set saving(val:boolean) { this.isSaving = val };

    constructor() {
    }

    public isSaving: boolean = false;

    onClick() {
        if (!this.enabled || this.isSaving)
            return;

        this.isSaving = true;

        var save: Observable<any> = null;

        //ISave (deprecated)
        if (typeof this.save !== 'function') {
            save = this.save.save(this.param);
        } else {
            save = this.save(this.param);
        }

        if (!save) {
            this.onCancelled();
            return;
        }

        save.subscribe(null, 
                        () => this.onError(),
                        () => this.onSuccess());
    }

    onCancelled() {
        this.isSaving = false;
    }

    onError() {
        this.isSaving = false;
    }

    onSuccess() {
        this.isSaving = false;

        if(this.save)
            this.save.isSaved = true;
    }
}

