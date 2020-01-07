export const html = `

<span *ngIf="!readonly">
    <div [ngClass]="{ 'form-group' : label }">
        <label class="control-label {{ formModel.labelClass}}"
               *ngIf="label">
            {{ label }}
            
            <icon-required *ngIf="required"></icon-required>
        </label>

        <div [ngClass]="label ? formModel.controlClass : ''">
            <div [ngClass]="{ 'btn-group': true, 'error': validator && validator.hasErrors }">
                <ng-content></ng-content>
            </div>

            <ng-content *ngIf="validator && validator.hasErrors" select="[error]" style="display:inline-block;"></ng-content>
        </div>
    </div>
</span>

<text [label]="label"
      *ngIf="readonly && label">
    {{ readonlyValue || value }}
</text>

<span *ngIf="readonly && !label">
    {{ readonlyValue || value }}
</span>
`;