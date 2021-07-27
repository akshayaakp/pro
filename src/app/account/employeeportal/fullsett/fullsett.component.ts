import { Component, OnInit } from '@angular/core';
import { employee } from '@app/_services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
import * as moment from 'moment';
@Component({
  selector: 'app-fullsett',
  templateUrl: './fullsett.component.html',
  styleUrls: ['./fullsett.component.less']
})
export class FullsettComponent implements OnInit {
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
        addpay:any;
        basicpay:any;
        house:any;
        trans:any;
        gross:any;
        deduc:any;
        netpay:any;
        approver:any;
        company:any;
        cost:any;
        currency:any;
        doj:any;
        dol:any;
        datej:any;
        datel1:any;
        datej1:any;
        datel:any;
        dept:any;
        desc:any;
        div:any;
        jobtitle:any;
        returntype:any;
        
  ngOnInit(): void {
    this.userid = employee.uname;
    console.log(this.userid)
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


                var respo = this.employeeservice.getfinal()

                //.pipe(first())
                .subscribe(
                    data => {
                      this.addpay = data.stat;
                      this.basicpay = data.stat1;
                      this.house = data.stat2;
                      this.trans = data.stat3;
                      this.gross = data.stat4; 
                      this.deduc = data.stat5; 
                      this.netpay = data.stat6; 
                      this.approver = data.stat7; 
                      this.company = data.stat8; 
                      this.compcode = data.stat9; 
                      this.cost = data.stat10; 
                      this.currency = data.stat11; 
                      this.doj = data.stat12; 
                      this.dol = data.stat13; 
                      this.dept = data.stat14; 
                      this.desc = data.stat15; 
                      this.div = data.stat16; 
                      this.jobtitle = data.stat17; 
                      this.returntype = data.stat18; 
                       this.datej = moment('2019-01-16', 'YYYY-MM-DD')
    this.datej1 = this.datej.format('DD-MM-YYYY');
    this.datel = moment(this.dol, 'YYYY-MM-DD')
    this.datel1 = this.datel.format('DD-MM-YYYY');
    
                       // console.log("result"+this.result);
                        console.log("respo"+this.result);
                        console.log("basicpay"+data.stat1);
                        
                        
                    },
    
                    error => {
                        console.log("error"+error);
                        this.alertService.error(error);
                        this.loading = false;
                    });

  }

}
