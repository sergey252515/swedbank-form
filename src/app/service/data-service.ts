// File: src/app/services/application-data.service.ts
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private applicationData: any = {};

    setApplicationData(data: any): void {
        this.applicationData = data;
    }

    getApplicationData(): any {
        return this.applicationData;
    }
}