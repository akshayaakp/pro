import { Component, OnInit } from '@angular/core';
import { AccountService, AlertService } from '@app/_services';
import {  Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ElementRef,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { AccountService, AlertService } from '@app/_services';

@Component({
  selector: 'app-customerboard',
  templateUrl: './customerboard.component.html',
  styleUrls: ['./customerboard.component.less']
})
export class CustomerboardComponent implements OnInit {
  slides = [{'image': 'assets/cus.jpg'}, {'image': 'assets/ven1.jpg'},{'image': 'assets/employee slide.jpg'}];
  form: FormGroup;
  result:Array<any>;
  // @ViewChild('fileInput',{static:false})fileInput:ElementRef;
  @ViewChild('fileInput',{ static: false }) fileInput: ElementRef;
  @Input() name: string;

  constructor(private http:HttpClient,private formBuilder: FormBuilder,private accountService: AccountService,
    private alertService: AlertService) { }
  logout() {
    this.accountService.logout();
}
onfileupload(){
  const imageBlob = this.fileInput.nativeElement.files[0];
  const file=new FormData();
  file.set('file',imageBlob);
  var res = this.accountService.getmasterdata(file)
  .subscribe(response =>{
    console.log(response);
    
    alert("NEW CUSTOMER WITH ID"+JSON.stringify(response)+"IS CREATED");
  });
}
  ngOnInit(): void {
    var text="Login successfull";
    this.alertService.success(text)
  }

}
