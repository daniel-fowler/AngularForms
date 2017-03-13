import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {
    TextboxCMP,
    FormCMP,
    TextCMP,
    BtnCMP,
    BtnMultiCMP,
    CheckboxCMP,
    BtnSaveCMP,
    DDLCMP,
    IconRequired
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
        BtnCMP,
        BtnMultiCMP,
        CheckboxCMP,
        BtnSaveCMP,
        DDLCMP,
        IconRequired,

        WordCountPipe
    ],
    declarations: [
        TextboxCMP,
        FormCMP,
        TextCMP,
        BtnCMP,
        BtnMultiCMP,
        CheckboxCMP,
        BtnSaveCMP,
        DDLCMP,
        IconRequired,

        WordCountPipe
    ]
})
export class NGFormsModule {

}