export const html:string = `

    <button class="btn btn-danger"
            type="button"
            [disabled]="!isEnabled || isDeleting"
            (click)="click($event)">
        <i class="fa fa-trash"
        *ngIf="!isDeleting && !isError && !isSuccess"></i>

        <i class="fa fa-check"
        *ngIf="!isDeleting && isSuccess"></i>

        <i class="fa fa-check"
        *ngIf="!isDeleting && isError"></i>

        <i class="fa fa-spinner fa-pulse"
        *ngIf="isDeleting"></i>
    </button>

`;