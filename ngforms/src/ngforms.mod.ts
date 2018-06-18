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
    IconRequired,
    BtnDeleteCMP,
    BtnBoolCMP,
    MoneyboxCMP
} from './components/core';

import {
    WordCountPipe
 } from './pipes/core';

import { FormModel } from './components/ngform/formModel';

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
        BtnDeleteCMP,
        BtnBoolCMP,
        MoneyboxCMP,

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
        BtnDeleteCMP,
        BtnBoolCMP,
        MoneyboxCMP,

        WordCountPipe
    ],
    providers: [
        FormModel
    ]
})
export class NGFormsModule {

}