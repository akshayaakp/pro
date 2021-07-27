import { Component, OnInit } from '@angular/core';
import { employee } from '@app/_services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
import * as moment from 'moment';
declare var $:any;

@Component({
  selector: 'app-leavereq',
  templateUrl: './leavereq.component.html',
  styleUrls: ['./leavereq.component.less']
})
export class LeavereqComponent implements OnInit {
  userid:any;
  selected = "----";
  selectedgroup:any;
  result:any;
  form: FormGroup;
  loading = false;
    submitted = false;
    returnUrl: string;
    seqno:any;
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
  this.loading = false;
    this.form = this.formBuilder.group({
      empid: ['', Validators.required],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      thr: ['', Validators.required],
      lt:['',Validators.required],
      
      
  }); 
  

  }
  get f() { return this.form.controls; }
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    
    this.loading = true;
    console.log(this.f.startdate.value);

    // var startdate = moment('15-06-2010', 'DD-MM-YYYY')
    // console.log(startdate.format('YYYY-MM-DD'));
    // var enddate = moment('this.f.enddate.value','DD-MM-YYYY')
    // console.log(enddate.format('YYYY-MM-DD'));
    var res = this.employeeservice.getleavereq(this.f.empid.value,this.f.startdate.value,this.f.enddate.value, this.f.thr.value,this.f.lt.value)

        //.pipe(first())
        .subscribe(
            data => {
               // console.log("result"+data);
                if(data.stat == "S")
                {
                  this.loading = false;
                  var text="the leave request is created";
                  this.alertService.success(text)
                    // this.router.navigate(['customerdashboard']);
                }
                else{
                    console.log("error");
                    
                }
               // console.log("url"+this.returnUrl);
            },

            error => {
                console.log("error"+error);
                this.alertService.error(error);
                this.loading = false;
            });
            //console.log("response"+localStorage.getItem("return"));
  
          }

}



