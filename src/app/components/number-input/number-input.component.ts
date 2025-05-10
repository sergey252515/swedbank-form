import {Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-number-input',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],

    template: `
        <div class="input-group" [formGroup]="formGroup">
            <input type="number" [formControlName]="controlName" [placeholder]="placeholder" value="34">
        </div>
    `
})
export class NumberInputComponent {
    @Input() formGroup!: FormGroup;
    @Input() controlName!: string;
    @Input() placeholder?: string;
}