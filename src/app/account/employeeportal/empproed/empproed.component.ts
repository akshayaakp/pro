import { Component, OnInit } from '@angular/core';
import { employee } from '@app/_services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
declare var $:any;
@Component({
  selector: 'app-empproed',
  templateUrl: './empproed.component.html',
  styleUrls: ['./empproed.component.less']
})
export class EmpproedComponent implements OnInit {
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
        empid:any;
        age:any;
        firstname:any;
        group:any;
        compcode:any;
        area:any;
        lastname:any;

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
      age: ['', Validators.required],
      firstname: ['', Validators.required],
      group: ['', Validators.required],
      compcode:['',Validators.required],
      lastname:['',Validators.required],
      area:['',Validators.required],
      
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
    console.log(this.f.empid.value);
    var res = this.employeeservice.getprofedit(this.f.empid.value, this.f.firstname.value, this.f.lastname.value, this.f.age.value, this.f.group.value, this.f.compcode.value,this.f.area.value)

        //.pipe(first())
        .subscribe(
            data => {
               // console.log("result"+data);
                if(data.stat == "S")
                {
                  this.loading = false;
                  var text="the contents are edited";
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
