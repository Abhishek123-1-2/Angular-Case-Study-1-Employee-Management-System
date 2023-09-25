import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, retry, throwError } from "rxjs";
import { EmpForm } from "../empform/empform.model";

@Injectable({
    providedIn: 'root',
})
export class EmployeeRestApiService {
    apiURL = 'http://localhost:3000/employees/'; // Update the URL

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };

    // ... Your existing methods ...

    createEmployee(employee: EmpForm): Observable<EmpForm> {
        return this.http
            .post<EmpForm>(this.apiURL, JSON.stringify(employee), this.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    // Define the handleError function
    private handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }

        console.error(errorMessage);
        return throwError(errorMessage);
    }

    getEmployees(): Observable<EmpForm[]> {
        return this.http.get<EmpForm[]>(this.apiURL).pipe(
            
            catchError(this.handleError) // Use the defined handleError function
        );
    }
    updateEmployees(id:any,employee:any):Observable<EmpForm>{
        return this.http.put<EmpForm>(this.apiURL+id,JSON.stringify(employee),this.httpOptions)
        .pipe(retry(1),catchError(this.handleError));
    }
    deleteEmployees(id:any){
        return this.http.delete<EmpForm>(this.apiURL+id,this.httpOptions)
        .pipe(retry(1),catchError(this.handleError));
    }
}
