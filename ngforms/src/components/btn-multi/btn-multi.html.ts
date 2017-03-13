export const html = `

<span *ngIf="!readonly">
    <div [ngClass]="{ 'form-group' : label }">
        <label class="control-label {{ formModel.labelClass}}"
               *ngIf="label">
            {{ label }}
            
            <icon-required *ngIf="required"></icon-required>
        </label>

        <div [ngClass]="label ? formModel.controlClass : ''">
            <div class="btn-group">
                <ng-content></ng-content>
            </div>
        </div>
    </div>
</span>

<text [label]="label"
      *ngIf="readonly">
    {{ readonlyValue }}
</text>



`;