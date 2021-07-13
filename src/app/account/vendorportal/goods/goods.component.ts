import { Component, OnInit } from '@angular/core';
import { vendor } from '@app/_services/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
import { MatDialogConfig } from "@angular/material/dialog";
import { MatDialog } from '@angular/material/dialog';
import { GoodreComponent } from '../goodre/goodre.component';
declare var $:any;
@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.less']
})
export class GoodsComponent implements OnInit {
  selected = "----";
  selectedgroup:any;
  result:Array<any>;
  form: FormGroup;
  loading = false;
    submitted = false;
    returnUrl: string;
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
    var res = this.vedorservice.getgoods()
    
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
  connect(data:any,data2:any){
    console.log("material no"+data);
    console.log("material year"+data2);
    vendor.matno=data;
    vendor.matyr=data2;
    this.dialog.open(GoodreComponent);
  
  }
}
