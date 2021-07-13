import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
@Component({
  selector: 'app-custedit',
  templateUrl: './custedit.component.html',
  styleUrls: ['./custedit.component.less']
})
export class CusteditComponent implements OnInit {
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

  ngOnInit(): void {
    this.loading = false;
    this.form = this.formBuilder.group({
      city: ['', Validators.required],
      country: ['', Validators.required],
      countrycode: ['', Validators.required],
      customer_id: ['', Validators.required],
      Name:['',Validators.required],
      postcode:['',Validators.required]
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
    console.log(this.f.customer_id.value);
    var res = this.accountService.edit(this.f.customer_id.value, this.f.Name.value, this.f.city.value, this.f.country.value, this.f.countrycode.value, this.f.postcode.value)

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
