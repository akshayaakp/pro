import { Component, OnInit } from '@angular/core';
import { vendor } from '@app/_services/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
declare var $:any;
@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.less']
})
export class QuotationComponent implements OnInit {
  result:Array<any>;
  result1:Array<any>;
  constructor(private vedorservice: vendor,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService) { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });
  
    console.log(vendor.pd);
    var res = this.vedorservice.getquo(vendor.pd)
    
    .subscribe(
      data => {
        this.result = data.stat;
        this.result1 = data.stat1;
        console.log(this.result[0]);
        console.log(this.result1[0]);
      },

      error => {
          console.log("error"+error);
          this.alertService.error(error);
          
      });
    
  }

}
