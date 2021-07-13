import { Component, OnInit } from '@angular/core';
import { vendor } from '@app/_services/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
import { MatDialogConfig } from "@angular/material/dialog";
import { MatDialog } from '@angular/material/dialog';
import { QuotationComponent } from '../quotation/quotation.component';
declare var $:any;

@Component({
  selector: 'app-poquo',
  templateUrl: './poquo.component.html',
  styleUrls: ['./poquo.component.less']
})
export class PoquoComponent implements OnInit {
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
  
  }
  getVal(){
    console.log(this.selectedgroup);
    vendor.doctype = this.selectedgroup;
    var res = this.vedorservice.getpoquo(vendor.doctype)
    
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
  connect(data:any){
    console.log(data);
    vendor.pd=data;
    this.dialog.open(QuotationComponent);
    
  }
}

