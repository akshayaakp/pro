import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
@Component({
  selector: 'app-custdashboard',
  templateUrl: './custdashboard.component.html',
  styleUrls: ['./custdashboard.component.less']
})
export class CustdashboardComponent implements OnInit {
  form: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    slides = [{'image': 'assets/customer.png'}, {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'},{'image': 'https://therichpost.com/wp-content/uploads/2020/10/Angular-10-Learning-Education-Center-Free-Template-1.png'}, {'image': 'https://therichpost.com/wp-content/uploads/2020/11/Reactjs-Easy-Shop-Free-Template-with-Source-Code.png'}, {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'}];


  constructor(private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService,
        ) { }

  ngOnInit(): void {this.form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
    var res = this.accountService.login(this.f.username.value, this.f.password.value)

        //.pipe(first())
        .subscribe(
            data => {
               // console.log("result"+data);
                if(data.stat == "true")
                {
                    console.log("hello");
                    this.router.navigate(['customerdashboard']);
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
