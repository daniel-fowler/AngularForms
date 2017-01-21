NGForms is a simple litle library for angular 2 that allows you to write html forms without the verbose html of bootstrap

## Example

```
<ngform class="form-horizontal"
        class-label="col-lg-2"
        class-control="col-lg-10">
    <textbox label="Texbox"></textbox>

    <textbox label="Textbox Multiline"
             [multiline]="true">
    </textbox>

    <text label="Text">Some text here.</text>

    <btn-multi label="Btn Multi">
        <btn [value]="true">Yes</btn>
        <btn [value]="false">No</btn>
    </btn-multi>                
</ngform>    
```