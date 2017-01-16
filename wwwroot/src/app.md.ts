import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppCMP} from './app.cmp';
import {TextboxCMP} from './components/textbox/textbox.cmp';
import {FormCMP} from './components/form/form.cmp';
import {TextCMP} from './components/text/text.cmp';
import {WordCountPipe} from './pipes/word-count.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppCMP,
        TextboxCMP,
        FormCMP,
        TextCMP,

        WordCountPipe
    ],
    bootstrap: [
        AppCMP
    ]
})
export class AppMD {

}