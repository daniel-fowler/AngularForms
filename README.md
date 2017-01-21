NGForms is a simple little angular 2 module that allows you to write HTML forms without the verbosity of bootstrap 3.

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
