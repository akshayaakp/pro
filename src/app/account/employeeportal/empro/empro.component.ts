import { Component, OnInit } from '@angular/core';
import { employee } from '@app/_services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
declare var $:any;
@Component({
  selector: 'app-empro',
  templateUrl: './empro.component.html',
  styleUrls: ['./empro.component.less']
})
export class EmproComponent implements OnInit {
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

  var res = this.employeeservice.getprof()

            //.pipe(first())
            .subscribe(
                data => {
                  this.result = data;
                   // console.log("result"+this.result);
                    console.log("res"+this.result);
                    
                    this.empid = this.result.stat;
                    this.age=this.result.stat2;
                    this.firstname=this.result.stat3;
                    this.lastname=this.result.stat4;
                    this.group=this.result.stat5;
                    this.compcode=this.result.stat6;
                    this.area=this.result.stat7;
                    
                    // if(data.stat == "true")
                    // {
                    //     console.log("hello");
                    //     this.router.navigate(['dashboard']);
                    // }
                    // else{
                    //     console.log("error");
                        
                    // }
                   // console.log("url"+this.returnUrl);
                },

                error => {
                    console.log("error"+error);
                    this.alertService.error(error);
                    this.loading = false;
                });


  }


}
