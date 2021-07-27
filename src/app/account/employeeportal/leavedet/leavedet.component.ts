import { Component, OnInit } from '@angular/core';
import { employee } from '@app/_services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
declare var $:any;
@Component({
  selector: 'app-leavedet',
  templateUrl: './leavedet.component.html',
  styleUrls: ['./leavedet.component.less']
})
export class LeavedetComponent implements OnInit {
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
    console.log(this.userid);
  var res = this.employeeservice.getleavedet()
    
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

