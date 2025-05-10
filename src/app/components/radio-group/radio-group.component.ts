import {Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // <-- добавлено CommonModule
  template: `
    <div class="radio-group" [formGroup]="formGroup">
      <div class="radio-option" *ngFor="let option of options">
        <input type="radio" [id]="option.value" [formControlName]="controlName" [value]="option.value">
        <label [for]="option.value">{{ option.label }}</label>
      </div>
    </div>
  `
})
export class RadioGroupComponent {
  @Input() formGroup!: FormGroup;
  @Input() options: any[] = [];
  @Input() controlName!: string;
  @Input() tooltip?: string;
}