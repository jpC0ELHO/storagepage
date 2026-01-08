import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.prod";
import { DashboardResumo } from "../models/dashboard-resumo.model";

@Injectable()
export class DashboardApiService{
private readonly url='${enviroment.apiUrl}/dashboard';
constructor(private http:HttpClient){
}

obterResumo(){
    return this.http.get<DashboardResumo>('${this.url}/resumo');
}

}