import { Component, OnInit } from '@angular/core';
import { employee } from '@app/_services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
declare var $:any;
@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.less']
})
export class PayrollComponent implements OnInit {
  userid:any;
  selected = "----";
  selectedgroup:any;
  result:any;
  form: FormGroup;
  loading = false;
    submitted = false;
    returnUrl: string;
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
  var res = this.employeeservice.getpayroll()
    
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

}
