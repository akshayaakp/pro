import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
@Component({
  selector: 'app-custprofile',
  templateUrl: './custprofile.component.html',
  styleUrls: ['./custprofile.component.less']
})
export class CustprofileComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService) { }
city:any;
result:any;
result1:any;
country:any;
countrycode:any;
customer_id:any;
name:any;
postcode:any;
//get f() { return this.form.controls;}
  ngOnInit(): void {
  this.loading = true;
  this.form = this.formBuilder.group({
    city: ['', Validators.required],
    country: ['', Validators.required],
    countrycode: ['', Validators.required],
    customer_id: ['', Validators.required],
    Name:['',Validators.required],
    postcode:['',Validators.required]
});
        var res = this.accountService.customerprofile()

            //.pipe(first())
            .subscribe(
                data => {
                  this.result = data;
                   // console.log("result"+this.result);
                    console.log("res"+this.result.stat);
                    console.log("res1"+this.result.stat2);
                    console.log("res2"+this.result.stat3);
                    this.city = this.result.stat;
                    this.country=this.result.stat2;
                    this.countrycode=this.result.stat3;
                    this.customer_id=this.result.stat4;
                    this.name=this.result.stat5;
                    this.postcode=this.result.stat6;
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
connect(){
  
  this.router.navigate(["edit"]);
}

}
