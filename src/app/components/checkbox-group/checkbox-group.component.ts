import {Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";


@Component({
    selector: 'app-checkbox-group',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    template: `
        <div class="checkbox-group" [formGroup]="formGroup"
        >
            <div [formGroupName]="'terms'" class="checkbox-option" *ngFor="let option of options">
                <input type="checkbox"
                       [id]="option.value"
                       [formControlName]="option.value">
                <label [for]="option.value">{{ option.label }}</label>
            </div>
        </div>
    `
})
export class CheckboxGroupComponent {

    @Input() formGroup!: FormGroup;
    @Input() options: any[] = [];
    @Input() controlName!: string;

}