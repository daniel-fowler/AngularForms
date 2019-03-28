export const html = `

<label *ngIf="!readonly">
    <input id="chk" type="checkbox"
           [value]="value"
           [checked]="isChecked"
           (change)="onCBChange($event)"/>
    {{ label }}
    <ng-content></ng-content>
</label>

<label *ngIf="readonly">
    <input id="chk" type="checkbox"
           [value]="value"
           [checked]="isChecked"
           disabled/>
    {{ label }}
    <ng-content></ng-content>
</label>

`;