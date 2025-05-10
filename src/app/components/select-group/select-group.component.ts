import {Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-select-group',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    template: `
        <div class="select-group" [formGroup]="formGroup">
            <select [formControlName]="controlName">
                <option value="">Select an option</option>
                <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
            </select>
        </div>
    `
})
export class SelectGroupComponent {
    @Input() formGroup!: FormGroup;
    @Input() options: any[] = [];
    @Input() controlName!: string;
}