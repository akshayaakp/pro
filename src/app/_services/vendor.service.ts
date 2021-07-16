import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class vendor{
    body:any;
    vendorid:any;
    inquirycategory:any;
    inqcat:any;
    uid:any;
    static pd:any;
    static purch:any;
   static doctype:any;
   static matno:any;
   static matyr:any;
   static fy:any;
   static inv:any;
   static vid:any;
   static base:any;
   static uname:any;
    // private userSubject: BehaviorSubject<User>;
    // public user: Observable<User>;
    

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        
    }
    
   
   
    public _urllogin1='http://localhost:3000/venlogin';

    login(username,password){
        this.uid = username;
        vendor.uname = username;
    
        console.log("id please"+this.uid);
        return this.http.post<any>(this._urllogin1, { username, password });        
    }
    public _urllogin2='http://localhost:3000/getpoquo';
    getpoquo(){
        console.log("id please"+ this.uid);
       
        this.body = {vendorid:this.uid}
        return this.http.post<any>(this._urllogin2,this.body);
    }

    public _urllogin3='http://localhost:3000/getquo';
    getquo(pd){
        console.log("pd is"+pd);
        return this.http.post<any>(this._urllogin3,{pd});
    }

    public _urllogin4='http://localhost:3000/getgoods';
    getgoods(){
        console.log(this.uid);
        this.body = {vendorid:this.uid}
        return this.http.post<any>(this._urllogin4,this.body);
    }
    public _urllogin5='http://localhost:3000/getgoodre';
    getgoodsre(matno,matyr){
        
        return this.http.post<any>(this._urllogin5,{matno,matyr});
    }
    public _urllogin6='http://localhost:3000/getpa';
    getpa(){
        this.body = {vendorid:this.uid}
        return this.http.post<any>(this._urllogin6,this.body);
    }
    public _urllogin7='http://localhost:3000/getcred';
    getcred(){
        this.body = {vendorid:this.uid}
        return this.http.post<any>(this._urllogin7,this.body);
    }
    public _urllogin8='http://localhost:3000/getdeb';
    getdeb(){
        this.body = {vendorid:this.uid}
        return this.http.post<any>(this._urllogin8,this.body);
    }
    public _urllogin9='http://localhost:3000/getprof';
    getprof(){
        this.body = {vendorid:this.uid}
        return this.http.post<any>(this._urllogin9,this.body);
    }
    public _urllogin10='http://localhost:3000/getprofedit';
    getprofedit(userid,firstname,lastname,street,city,district,postcode,country){
        this.body = {vendorid:this.uid}
        return this.http.post<any>(this._urllogin10,{userid,firstname,lastname,street,city,district,postcode,country});
    }
    public _urllogin11='http://localhost:3000/getpo';
    getpo(){
        console.log("id please"+ this.uid);
       
        this.body = {vendorid:this.uid}
        return this.http.post<any>(this._urllogin11,this.body);
    }
    public _urllogin12='http://localhost:3000/getpod';
    getpod(purch){
        console.log("pd is"+purch);
        return this.http.post<any>(this._urllogin12,{purch});
    }
    public _urllogin13='http://localhost:3000/getpocre';
    getpocre(compcode,ino,matdesc,matno,plant,pg,porg,qty,raised,userid){
        this.body = {vendorid:this.uid}
        console.log(porg);
        return this.http.post<any>(this._urllogin13,{compcode,ino,matdesc,matno,plant,pg,porg,qty,raised,userid});
    }
    public _urllogin14='http://localhost:3000/getveninv';
    getveniv(){
        console.log("id please"+ this.uid);
       
        this.body = {vendorid:this.uid}
        return this.http.post<any>(this._urllogin14,this.body);
    }
    public _urllogin15='http://localhost:3000/getveninvdet';
    getveninvdet(vid,fy,inv){
        console.log("pd is"+vid+inv+fy);
        return this.http.post<any>(this._urllogin15,{vid,fy,inv});
    }


    
}