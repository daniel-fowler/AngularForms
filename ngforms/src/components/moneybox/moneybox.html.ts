export const html = `

<div class="form-group"
    *ngIf="label">
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
                    (ngModelChange)="changeValue($event)"
                    class="form-control text-right"
                    style="width: 130px" />

            <ng-content></ng-content>
        </div>
    </div>
</div>

<span *ngIf="!label">
    <div class="input-group">
        <span class="input-group-addon">£</span>

        <input type="number"
                step="0.01"
                [ngModel]="value"
                (ngModelChange)="changeValue($event)"
                class="form-control text-right"
                style="width: 130px" />
    </div>
</span>
`;