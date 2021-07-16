import { Component, OnInit } from '@angular/core';
import { vendor } from '@app/_services/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
declare var $:any;
@Component({
  selector: 'app-veninvdet',
  templateUrl: './veninvdet.component.html',
  styleUrls: ['./veninvdet.component.less']
})
export class VeninvdetComponent implements OnInit {
  result:Array<any>;
  result1:Array<any>;
  base:any;
  userid:any;

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
  this.userid=vendor.uname;
  console.log(vendor.vid,vendor.fy,vendor.inv);
    var res = this.vedorservice.getveninvdet(vendor.vid,vendor.fy,vendor.inv)
    
    .subscribe(
      data => {
        this.result = data.stat;
        this.result1 = data.stat1;
        vendor.base = data.stat2;
        console.log(vendor.base);
        console.log(this.result[0]);
        console.log(this.result1[0]);
      },

      error => {
          console.log("error"+error);
          this.alertService.error(error);
          
      });
  

  }
  downloadPdf(base64String, fileName){
    
    // Download PDF in Chrome etc.
    const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.pdf`
    link.click();
  
  
}
onClickDownloadPdf(){
  console.log("base64"+vendor.base);
  this.downloadPdf(vendor.base,vendor.uname);
}
}
