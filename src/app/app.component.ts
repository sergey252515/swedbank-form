import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ApplicationFormComponent} from './components/application-form/application-form.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, ApplicationFormComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'swedbank-form';
}