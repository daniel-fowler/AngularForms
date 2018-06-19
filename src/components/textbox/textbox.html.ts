export const html = `

<div class="form-group"
    *ngIf="label && !readonly">
    <label class="control-label {{ formModel.labelClass }}">
        {{label}}
        <icon-required *ngIf="required"></icon-required>
    </label>

    <div class="{{ formModel.controlClass }}">
        <input [type]="password ? 'password' : 'text'"
                *ngIf="!multiline"
                class="form-control"
                [ngModel]="value"
                (ngModelChange)="changeValue($event)"/>

        <textarea *ngIf="multiline"
                    class="form-control"
                    rows="10"
                    [ngModel]="value"
                    (ngModelChange)="changeValue($event)"></textarea>

        <span class="text-muted" *ngIf="multiline">
            {{ value | wordCount }} Words
        </span>
    </div>
</div>

<span *ngIf="!label && !readonly">
    <input type="text"
            *ngIf="!multiline"
            [ngModel]="value"
            (ngModelChange)="changeValue($event)" 
            class="form-control" />

    <textarea *ngIf="multiline"
                rows="10"
                [ngModel]="value"
                (ngModelChange)="changeValue($event)"
                class="form-control"></textarea>

    <span class="text-muted" *ngIf="multiline">
        {{ value | wordCount }} Words
    </span>
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