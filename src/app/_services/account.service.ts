import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AccountService {
    body:any;
    body1:any;
    customerid:any;
    venid:any;
    inquirycategory:any;
    inqcat:any;
    userid:any;
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    static salesdoc:any;
    static cusid:any;
    static use:any;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }
    public _urllogin='http://localhost:3000/custlogin';
    login(username, password) {
        this.customerid=username;
        
        return this.http.post<any>(this._urllogin, { username, password });        
            //.pipe(map(result => {
            //     // store user details and jwt token in local storage to keep user logged in between page refreshes
            //     localStorage.setItem('user', JSON.stringify(result));
            //     this.userSubject.next(result);
            //     console.log("User"+JSON.stringify(result));
            //     return result;
            // }));
    }


    public _urllogin1='http://localhost:3000/custprofile';
    customerprofile(){
        console.log("id"+this.customerid);
        this.body = {customerid:this.customerid}
        return this.http.post<any>(this._urllogin1, this.body);
    }
    //cts
    public _urllogin2='http://localhost:3000/inquiry';
    customerinquirydetails()
    {
        this.inquirycategory= "A";
        //this.inqcat = JSON.stringify(this.inquirycategory);
        console.log("id"+this.customerid);
        //console.log("docno"+this.inquirycategory);
        this.body = {customerid:this.customerid};
       // this.inqcat = {inquirycategory:this.inquirycategory}
        return this.http.post<any>(this._urllogin2, this.body);
    }
    //getinquirydetails
    public _urllogin3='http://localhost:3000/getinqdet';
    getinquirydetails(salesdoc)
    {
        console.log("document value"+salesdoc);
        var text="no data found";
        if(this.customerid!=18)
        {
        alert(text);
        }
        return this.http.post<any>(this._urllogin3,{salesdoc});
    }
    //salesorderdetails
    public _urllogin4='http://localhost:3000/getsalesdet';
    getsalesdetails()
    {
        console.log("id"+this.customerid);
        this.body = {customerid:this.customerid}
        return this.http.post<any>(this._urllogin4, this.body);
    }
    //get list of delivery

    public _urllogin5='http://localhost:3000/getlistdelivery';
    getlistdelivery()
    {
        console.log("id"+this.customerid);
        this.body = {customerid:this.customerid}
        return this.http.post<any>(this._urllogin5, this.body);
    }
    //get credit details
    public _urllogin6='http://localhost:3000/getcredit';
    getcredit()
    {
        console.log("id"+this.customerid);
        this.body = {customerid:this.customerid}
        return this.http.post<any>(this._urllogin6, this.body);
    }
    //get payment details
    public _urllogin7='http://localhost:3000/getpayment';
    getpayment()
    {
        console.log("id"+this.customerid);
        this.body = {customerid:this.customerid}
        return this.http.post<any>(this._urllogin7, this.body);
    }
    public _urllogin8='http://localhost:3000/file';
    getmasterdata(file){
        return this.http.post<any>(this._urllogin8, file);
    }
    public _urllogin9='http://localhost:3000/edit';
    edit(cuid,name,city,country,countrycode,postcode)
    {
        console.log("id");
        console.log("id"+name);
        console.log("id"+city);
        console.log("id"+country);
        console.log("id"+countrycode);
        console.log("id"+postcode);
        // this.body = {customerid:this.customerid};
        return this.http.post<any>(this._urllogin9,{cuid,name,city,country,countrycode,postcode});
    }

    // -----------------------------------------------VENDOR PORTAL---------------------------------------------------------------
   
   



    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['dashboard']);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue.id) {
                    this.logout();
                }
                return x;
            }));
    }
}