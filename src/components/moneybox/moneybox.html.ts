export const html = `

<div class="form-group"
    *ngIf="!readonly && label">
    <label class="control-label {{ formModel.labelClass }}">
        {{label}}
        <icon-required *ngIf="required"></icon-required>
    </label>

    <div class="{{ formModel.controlClass }}">
        <div class="input-group">
            <span class="input-group-addon">£</span>

            <input type="number"
                    step="0.01"
                    [ngModel]="value"
                    [placeholder]="placeholder || ''"
                    (ngModelChange)="changeValue($event)"
                    class="form-control text-right"
                    style="width: 130px" />

            <ng-content></ng-content>
        </div>
    </div>
</div>

<span *ngIf="!readonly && !label">
    <div class="input-group">
        <span class="input-group-addon">£</span>

        <input type="number"
                step="0.01"
                [ngModel]="value"
                [placeholder]="placeholder || ''"
                (ngModelChange)="changeValue($event)"
                class="form-control text-right"
                style="width: 130px" />
    </div>
</span>

<text [label]="label"
      [required]="required"
      *ngIf="readonly && label">
    {{ value }}
</text>

<span *ngIf="readonly && !label">
    {{ value }}
</span>
`;