import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {InputType} from "../../utils/input-type";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {RadioGroupComponent} from "../radio-group/radio-group.component";
import {SelectGroupComponent} from "../select-group/select-group.component";
import {NumberInputComponent} from "../number-input/number-input.component";
import {CheckboxGroupComponent} from "../checkbox-group/checkbox-group.component";
import {TextareaGroupComponent} from "../textarea-group/textarea-group.component";
import {DataService} from "../../service/data-service";

@Component({
    selector: 'app-application-form',
    templateUrl: './application-form.component.html',
    styleUrls: ['./application-form.component.scss'],
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    imports: [RouterModule, ReactiveFormsModule, CommonModule, RadioGroupComponent, SelectGroupComponent, NumberInputComponent, CheckboxGroupComponent, TextareaGroupComponent],
})
export class ApplicationFormComponent implements OnInit {
    currentStep = -1;
    formData: any = {};
    applicationForm: FormGroup;

    questions = [
        {
            id: 'product',
            question: 'Which product would you like to apply for?',
            type: 'radio',
            options: [
                {value: 'credit-card', label: 'Credit Card'},
                {value: 'small-loan', label: 'Small Loan'},
                {value: 'car-leasing', label: 'Car Leasing'}
            ],
            tooltip: 'Choose the financial product that best suits your needs'
        },
        {
            id: 'purpose',
            question: 'What is the purpose of your application?',
            type: 'select',
            options: [
                {value: 'personal', label: 'Personal Use'},
                {value: 'business', label: 'Business Use'},
                {value: 'education', label: 'Education'},
                {value: 'other', label: 'Other'}
            ]
        },
        {
            id: 'income',
            question: 'What is your monthly income?',
            type: 'number',
            placeholder: 'Enter your monthly income in EUR'
        },
        {
            id: 'terms',
            question: 'Please confirm the following terms:',
            type: 'checkbox',
            options: [
                {value: 'terms', label: 'I agree to the terms and conditions'},
                {value: 'privacy', label: 'I agree to the privacy policy'},
                {value: 'marketing', label: 'I agree to receive marketing communications'}
            ]
        },
        {
            id: 'additional',
            question: 'Additional information (optional)',
            type: 'textarea',
            placeholder: 'Please provide any additional information that might be relevant to your application'
        }
    ];

    constructor(private fb: FormBuilder,
                private router: Router,
                private dataService: DataService,
                private route: ActivatedRoute) {
        this.applicationForm = this.fb.group({
            product: ['', Validators.required],
            purpose: ['', Validators.required],
            income: [0, [Validators.required, Validators.min(0)]],
            terms: this.fb.group({
                terms: [false, Validators.requiredTrue],
                privacy: [false, Validators.requiredTrue],
                marketing: [false]
            }),
            additional: [' ']
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.currentStep = +params['step'] || 0;
        });
    }

    nextStep(): void {
        if (this.currentStep < this.questions.length - 1) {
            this.currentStep++;
            this.router.navigate(['/form', this.currentStep]);
        }
    }

    previousStep(): void {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.router.navigate(['/form', this.currentStep]);
        }
    }

    isStepValid(): boolean {
        const currentQuestion = this.questions[this.currentStep];
        const control = this.applicationForm.get(currentQuestion.id);
        return control ? control.valid : false;
    }

    onSubmit(): void {
        if (this.applicationForm.valid) {
            this.dataService.setApplicationData(this.applicationForm.value);
            this.currentStep = this.questions.length;
        }
    }

    getCurrentQuestion(): any {
        return this.questions[this.currentStep];
    }

    isLastStep(): boolean {
        return this.currentStep === this.questions.length - 1;
    }

    isSummaryStep(): boolean {
        let isSummaryStep = this.currentStep === this.questions.length;
        if (isSummaryStep) {
            this.formData = this.dataService.getApplicationData();
        }
        return isSummaryStep;
    }

    public get inputType(): typeof InputType {
        return InputType;
    }

    protected readonly InputType = InputType;
}
