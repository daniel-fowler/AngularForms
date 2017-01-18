import { BtnMultiCMP } from '../btn-multi/btn-multi.cmp';
export declare class BtnCMP {
    protected btnMulti: BtnMultiCMP;
    constructor(btnMulti?: BtnMultiCMP);
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
