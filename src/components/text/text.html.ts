export const html = `

<div class="form-group"
     *ngIf="label">
    <label class="control-label {{ formModel.labelClass }}">
        {{ label }}

        <icon-required *ngIf="required"></icon-required>
    </label>

    <div class="{{ formModel.controlClass }}">
        <div class="form-control-static">
            {{ value }}
            <ng-content></ng-content>
        </div>
    </div>
</div>

<span *ngIf="!label">
    {{ value }}
</span>

`;