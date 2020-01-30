export const html:string = `

<div class="form-group" *ngIf="label && !readonly">
    <label class="control-label {{ formModel.labelClass }}">
        {{ label }}

        <icon-required *ngIf="required"></icon-required>
    </label>

    <div class="{{ formModel.controlClass }}">
        <select class="form-control"
                [ngModel]="value"
                (change)="onValueChanged($event)"
                *ngIf="list">
            <option [value]="chooseVal">{{ chooseText }}</option>

            <option *ngFor="let item of list"
                     value="{{ item.id }}">
                {{ item.name }}
            </option>
        </select>
    </div>
</div>

<div *ngIf="!label && !readonly">
    <select class="form-control"
            [ngModel]="value"
            (change)="onValueChanged($event)"
            *ngIf="list">
        <option [value]="chooseVal">{{ chooseText }}</option>

        <option *ngFor="let item of list"
                value="{{ item.id }}">
            {{ item.name }}
        </option>
    </select>
</div>

<text [label]="label"
      [required]="required"
      *ngIf="readonly && label">
    <span *ngIf="selectedItem">
        {{ selectedItem.name }}
    </span>
</text>

<span *ngIf="readonly && !label">
    <span *ngIf="selectedItem">
        {{ selectedItem.name }}
    </span>
</span>

`;