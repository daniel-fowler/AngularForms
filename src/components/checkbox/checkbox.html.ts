export const html = `

<label>
    <input id="chk" 
           type="checkbox"
           [value]="value"
           [checked]="isChecked"
           (change)="onCBChange($event)"
           [disabled]="readonly" />
    {{ label }}
    <ng-content></ng-content>
</label>

`;