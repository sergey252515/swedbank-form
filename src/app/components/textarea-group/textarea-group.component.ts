import {Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-textarea-group',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    template: `
        <div class="textarea-group" [formGroup]="formGroup">
            <textarea [formControlName]="controlName" [placeholder]="placeholder" rows="4"></textarea>
        </div>
    `
})
export class TextareaGroupComponent {
    @Input() formGroup!: FormGroup;
    @Input() controlName!: string;
    @Input() placeholder?: string;
}