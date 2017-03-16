export const html: string = `

<btn-multi [label]="label"
           [required]="required"            
           [value]="value"
           (valueChange)="changeValue($event)">
    <btn [value]="true">
        Yes
    </btn>

    <btn [value]="false"
            [negative]="true">
        No
    </btn>
</btn-multi>

`;