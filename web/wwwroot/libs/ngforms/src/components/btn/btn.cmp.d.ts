import { BtnMultiCMP } from '../btn-multi/btn-multi.cmp';
import { FormModel } from '../form/formModel';
export declare class BtnCMP {
    formModel: FormModel;
    protected btnMulti: BtnMultiCMP;
    constructor(formModel: FormModel, btnMulti?: BtnMultiCMP);
    readonly test: string;
    onClicked: () => void;
    value: any;
    busy: boolean;
    selectedClass: string;
    selected: boolean;
    negative: boolean;
    classSelected: string;
    private _class;
    class: string;
    click(): void;
}
