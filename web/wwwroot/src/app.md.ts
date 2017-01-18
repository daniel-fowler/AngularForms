import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppCMP} from './app.cmp';

import {NGFormsModule} from '../libs/ngforms'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NGFormsModule
    ],
    declarations: [
        AppCMP
    ],
    bootstrap: [
        AppCMP
    ]
})
export class AppMD {

}