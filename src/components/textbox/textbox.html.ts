export const html = `
<ng-template #error>
    <ng-content *ngIf="validator && validator.hasErrors" select="[error]" style="display:inline-block;"></ng-content>
</ng-template>

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

        <textarea *ngIf="multiline"
                    [ngClass]="{ 'form-control': true, 'error': validator && validator.hasErrors }"
                    style="width:90%; display: inline-block;"
                    rows="10"
                    [ngModel]="value"
                    (focusout)="onFocusout()" 
                    (ngModelChange)="changeValue($event)"></textarea>

        <ng-container *ngTemplateOutlet="error"></ng-container>

        <div class="text-muted" *ngIf="multiline">
            {{ value | wordCount }} Words
        </div>
    </div>
</div>



<span *ngIf="!label && !readonly">
    <input type="text"
            *ngIf="!multiline"
            [ngModel]="value"
            [placeholder]="placeholder || ''"
            (ngModelChange)="changeValue($event)" 
            [ngClass]="{ 'form-control': true, 'error': validator && validator.hasErrors }"
            style="width:90%; display: inline-block;"
            (focusout)="onFocusout()" />

    <textarea *ngIf="multiline"
                rows="10"
                [ngModel]="value"
                (ngModelChange)="changeValue($event)"
                (focusout)="onFocusout()" 
                [ngClass]="{ 'form-control': true, 'error': validator && validator.hasErrors }"
                style="width:90%; display: inline-block;"></textarea>

    <ng-container *ngTemplateOutlet="error"></ng-container>

    <div class="text-muted" *ngIf="multiline">
        {{ value | wordCount }} Words
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