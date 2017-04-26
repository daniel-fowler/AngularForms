import { Observable } from 'rxjs/Rx';
export declare class BtnDeleteCMP {
    constructor();
    delete: ((param?: any) => Observable<any>);
    param: any;
    confirm: boolean;
    confirmMsg: string;
    isDeleting: boolean;
    isError: boolean;
    isSuccess: boolean;
    isEnabled: boolean;
    click(event: any): void;
    onError(): void;
    onSuccess(): void;
}
