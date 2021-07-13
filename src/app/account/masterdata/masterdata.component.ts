import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
import * as $ from 'jquery';

@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.less']
})
export class MasterdataComponent implements OnInit {
  form: FormGroup;
  result:Array<any>;
  // @ViewChild('fileInput',{static:false})fileInput:ElementRef;
  @ViewChild('fileInput',{ static: false }) fileInput: ElementRef;
// upload(event:any){
//   const file=event.target.file;
//   console.log(file);
  
// }
// afuConfig = {
//   uploadAPI: {
//     url:"http://localhost:3000/file"
//   }
// };
  
  


  constructor(private http:HttpClient,private formBuilder: FormBuilder,private accountService: AccountService,
    private alertService: AlertService) { }
  onfileupload(){
      const imageBlob = this.fileInput.nativeElement.files[0];
      const file=new FormData();
      file.set('file',imageBlob);
      var res = this.accountService.getmasterdata(file)
      .subscribe(response =>{
        console.log(response);
        this.result=response;
        console.log(this.result[0]);
        // Customers with ids {{result}} are created
        
        var text="NEW CUSTOMER WITH ID IS CREATED";
        // this.alertService.success(text+ this.result);
        // this.alertService.error("hello");
        // alert("NEW CUSTOMER WITH ID"+JSON.stringify(response)+"IS CREATED");
      });
  }
  ngOnInit(): void {
    
  }
  
}
