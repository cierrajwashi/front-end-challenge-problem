import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable()
export class EquipmentService {

    private _url: string = `${environment.apiUrl}/equipment`;
    constructor(private http: HttpClient) {}

    getEquipment() {
        return this.http.get(this._url)
    }
}
