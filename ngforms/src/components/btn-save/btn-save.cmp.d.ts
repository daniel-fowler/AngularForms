export declare class BtnSaveCMP {
    save: any;
    param: any;
    enabled: boolean;
    text: string;
    savingText: string;
    savedText: string;
    content: boolean;
    saving: boolean;
    constructor();
    isSaving: boolean;
    onClick(): void;
    onCancelled(): void;
    onError(): void;
    onSuccess(): void;
}
