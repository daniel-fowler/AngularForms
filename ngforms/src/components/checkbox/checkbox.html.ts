export const html = `

<label *ngIf="!readonly">
    <input id="chk" type="checkbox"
           [value]="value"
           [checked]="isChecked"
           (change)="onCBChange($event)"/>

    {{ label }}
</label>

`;