import {Component, OnInit } from "@angular/core";
import { DashboardApiService } from "../services/dashboard-api.service";
import { DashboardResumo } from "../models/dashboard-resumo.model";

@Component({
    selector:'app-dashboard-page',
    templateUrl:'./dashboard.page.html',
    styleUrls:['./dashboard.page.scss']
})
export class DashboardPage implements OnInit{
    resumo!:DashboardResumo;

    constructor(private dashboardApi:DashboardApiService){}

    ngOnInit(): void {
        this.dashboardApi.obterResumo().subscribe(dados=>this.resumo=dados);
    }
}