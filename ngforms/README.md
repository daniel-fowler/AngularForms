NGForms is a simple little angular 2 module that allows you to write HTML forms without the verbosity of bootstrap 3.

## Example

```
<ngform class-label="col-lg-2"
        class-control="col-lg-10">

    <textbox label="Texbox"
                [(value)]="textbox"
                [required]="true"></textbox>
    <text label=" ">{{ textbox }}</text>

    <textbox label="Textbox Multiline"
                [multiline]="true"
                [(value)]="textboxmulti"
                [required]="true"></textbox>

    <text label="Text"
            [required]="true">Some text here.</text>

    <btn-multi label="Btn Multi"
                [(value)]="yesno"
                [required]="true">
        <btn [value]="true">Yes</btn>
        <btn [value]="false">No</btn>
    </btn-multi>

    <text label="Checkbox list"
            [required]="true">
        <div *ngFor="let item of fruit">
            <checkbox [label]="item"
                        [value]="item"
                        [checked]="selectedFruit">
            </checkbox>              
        </div>
    </text>

    <text label="Checkbox bool">
        <checkbox label="Is Checked:"
                    [(checked)]="isChecked"></checkbox>
    </text>

    <ddl label="Drop Down List"
            [list]="list"
            [(value)]="selectedItem"
            [required]="true"></ddl>

    <btn-bool label="Btn Bool"
                [required]="true"
                [(value)]="btnBoolValue">
    </btn-bool>
</ngform>    
```
