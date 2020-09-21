import { Component, OnInit } from '@angular/core';
import {EquipmentService} from "./equipment.service";
import { EquipmentData} from "../backend-interceptor/EquipmentData";

@Component({
    selector: 'app-equipment',
    templateUrl: './equipment.component.html',
    styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

    public equipment: EquipmentData[] = [];
    public errorMessage;
    constructor(private _employeeService: EquipmentService) {}

    ngOnInit(){
        this._employeeService.getEquipment()
            .subscribe((data: EquipmentData[]) => this.equipment = data, error=> this.errorMessage = `${error.message}, (error retrieving equipment)`)
    }
};
