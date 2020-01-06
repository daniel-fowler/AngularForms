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
                [ngClass]="{ 'form-control': true, 'error': validator && validator.hasErrors }"
                style="width:90%; display: inline-block;"
                [ngModel]="value"
                [placeholder]="placeholder || ''"
                (ngModelChange)="changeValue($event)"
                (focusout)="onFocusout()" />

        <ng-content *ngIf="validator && validator.hasErrors" select="[error]" style="display:inline-block;"></ng-content>

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
            [placeholder]="placeholder || ''"
            (ngModelChange)="changeValue($event)" 
            [ngClass]="{ 'form-control': true, 'error': validator && validator.hasErrors }"
            (focusout)="onFocusout()" />

    <ng-content *ngIf="validator && validator.hasErrors" select="[error]" style="display:inline-block;"></ng-content>
    
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