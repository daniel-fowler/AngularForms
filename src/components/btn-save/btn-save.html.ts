export const html:string = `

<button class="btn btn-success"
        type="button"
        [disabled]="!enabled || isSaving">

    <i class="fa fa-spinner fa-pulse"
       *ngIf="isSaving"></i>

    <span *ngIf="!content">
        <i class="glyphicon glyphicon-ok"
           *ngIf="!isSaving"></i>
        
        <span *ngIf="isSaving">
            {{ savingText }}
        </span>
        
        <span *ngIf="!isSaving">
            {{ text }}
        </span>
    </span>
    
    <span *ngIf="content && !isSaving">
        <ng-content></ng-content>
    </span>
</button>

`;