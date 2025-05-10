import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApplicationFormComponent} from './components/application-form/application-form.component';

export const routes: Routes = [
    {path: '', redirectTo: 'form', pathMatch: 'full'},
    {path: 'form', component: ApplicationFormComponent},
    {path: 'form/:step', component: ApplicationFormComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}