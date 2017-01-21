export const html = `

<label *ngIf="!readonly">
    <input id="chk" type="checkbox"
           [value]="value"
           [checked]="isSelected"
           (change)="onCBChange($event)"/>

    {{ label }}
</label>

`;