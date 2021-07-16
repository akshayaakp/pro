import { Component, OnInit } from '@angular/core';

import { vendor } from '@app/_services/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
import { MatDialogConfig } from "@angular/material/dialog";
import { MatDialog } from '@angular/material/dialog';
import { VeninvdetComponent } from '../veninvdet/veninvdet.component';
declare var $:any;
@Component({
  selector: 'app-veninv',
  templateUrl: './veninv.component.html',
  styleUrls: ['./veninv.component.less']
})
export class VeninvComponent implements OnInit {
  selected = "----";
  selectedgroup:any;
  result:Array<any>;
  form: FormGroup;
  loading = false;
    submitted = false;
    returnUrl: string;
    isShow = true;
    userid :any;
  constructor(private vedorservice: vendor,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private dialog:MatDialog) { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
      
  });
  this.userid=vendor.uname;
  var res = this.vedorservice.getveniv()
    
  .subscribe(
    data => {
      this.result = data.stat;
        console.log(this.result[0]);
    },

    error => {
        console.log("error"+error);
        this.alertService.error(error);
        this.loading = false;
    });
  }
  connect(data:any,data1:any,data2:any){
    console.log("inv"+data);
    console.log("userid"+data1);
    console.log("fy"+data2);
    vendor.inv=data;
    vendor.vid=data1;
    vendor.fy=data2;

    this.dialog.open(VeninvdetComponent);
    
  }
  
}
