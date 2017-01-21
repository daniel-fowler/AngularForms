import {Component} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './src/app.html'
})
export class AppCMP
{
    fruit:string[] = ['Orange', 'Apple'];
    selectedFruit:string[] = [ 'Orange' ];
}