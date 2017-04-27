import {Component} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './src/app.html'
})
export class AppCMP
{
    fruit:string[] = ['Orange', 'Apple'];
    selectedFruit:string[] = [ 'Orange' ];
    list: any[] = [ 
        { id: 1, name: "Item 1"},
        { id: 2, name: "Item 2"},
        { id: 3, name: "Item 3"},
    ];

    selectedItem:any = null;

    btnBoolValue:boolean = false;

    isChecked: boolean = null;
}