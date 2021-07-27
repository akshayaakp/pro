import { Component, OnInit } from '@angular/core';
import { employee } from '@app/_services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
declare var $:any;

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.less']
})
export class PayslipComponent implements OnInit {
  userid:any;
  selected = "----";
  selectedgroup:any;
  result:any;
  form: FormGroup;
  loading = false;
    submitted = false;
    returnUrl: string;
    seqno:any;
    pdf:any;
  constructor(private employeeservice:employee,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService) { }

  ngOnInit(): void {
    this.userid = employee.uname;
    console.log(this.userid)
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
      
  });
  var res = this.employeeservice.getseqno()
    
    .subscribe(
      data => {

        console.log("hi"); 
        this.result=data.stat;
          console.log(this.result[0]);
        
      },

      error => {
          console.log("error"+error);
          this.alertService.error(error);
          this.loading = false;
      });

  }
  onClickDownloadPdf(){
    console.log(this.selectedgroup);
    this.seqno = this.selectedgroup;
    var res = this.employeeservice.getpayslip(this.seqno,this.userid)
    .subscribe(
      data => {
        console.log("hi"); 
        this.result=data.stat;
        console.log(this.result);
        this.downloadPdf(this.result,"sample");
        
      },

      error => {
          console.log("error"+error);
          this.alertService.error(error);
          this.loading = false;
      });
  }

  downloadPdf(base64String, fileName){
    
    // Download PDF in Chrome etc.
    this.pdf = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement("a");
    link.href = this.pdf;
    link.download = `${fileName}.pdf`
    link.click();
  
  
}

}
