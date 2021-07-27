import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class employee{
    uid:any;
    body:any;
    static uname:any;
    static seqno:any
    
    // private userSubject: BehaviorSubject<User>;
    // public user: Observable<User>;
    

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        
    }
    public _urllogin1='http://localhost:3000/emplogin';

    login(username,password){
        this.uid = username;
        employee.uname = username;
    
        console.log("id please"+this.uid);
        return this.http.post<any>(this._urllogin1, { username, password });        
    }
    public _urllogin2='http://localhost:3000/emppro';
    getprof(){
        this.body = {empid:this.uid}
        return this.http.post<any>(this._urllogin2,this.body);
    }
    public _urllogin3='http://localhost:3000/empproedit';
    getprofedit(empid,firstname,lastname,age,group,compcode,area){
        this.body = {empid:this.uid}
        return this.http.post<any>(this._urllogin3,{empid,firstname,lastname,age,group,compcode,area});
    }
    public _urllogin4='http://localhost:3000/emppayroll';
    getpayroll(){
        this.body = {empid:this.uid}
        return this.http.post<any>(this._urllogin4,this.body);
    }
    public _urllogin5='http://localhost:3000/empleavety';
    getleavetype(){
        this.body = {empid:this.uid}
        return this.http.post<any>(this._urllogin5,this.body);
    }
    public _urllogin7='http://localhost:3000/empleavedet';
    getleavedet(){
        this.body = {empid:this.uid}
        return this.http.post<any>(this._urllogin7,this.body);
    }
    public _urllogin8='http://localhost:3000/empseqno';
    getseqno(){
        this.body = {empid:this.uid}
        return this.http.post<any>(this._urllogin8,this.body);
    }
    public _urllogin9='http://localhost:3000/emppayslip';
    getpayslip(seqnumber,eid){
        this.body = {empid:this.uid}
        
        return this.http.post<any>(this._urllogin9,{seqnumber,eid});
    }
    public _urllogin10='http://localhost:3000/leavereq';
    getleavereq(eid,startdate,enddate,thr,lt){
        this.body = {empid:this.uid}
        
        return this.http.post<any>(this._urllogin10,{eid,startdate,enddate,thr,lt});
    }
    public _urllogin11='http://localhost:3000/getfinal';
    getfinal(){
        this.body = {empid:this.uid}
        
        return this.http.post<any>(this._urllogin11,this.body);
    }
    public _urllogin6='http://localhost:3000/empleavequo';
    getleavequo(){
        this.body = {empid:this.uid}
        return this.http.post<any>(this._urllogin6,this.body);
    }
    
    
    


    
}