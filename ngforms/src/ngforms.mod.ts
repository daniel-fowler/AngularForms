import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {
    TextboxCMP,
    FormCMP,
    TextCMP
} from './components/core';

import {
    WordCountPipe
 } from './pipes/core';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports:[
        TextboxCMP,
        FormCMP,
        TextCMP,

        WordCountPipe
    ],
    declarations: [
        TextboxCMP,
        FormCMP,
        TextCMP,

        WordCountPipe
    ]
})
export class NGFormsModule {

}