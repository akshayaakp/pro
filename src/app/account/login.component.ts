import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'login.component.html',
styleUrls: ['./login.component.less'] })
export class LoginComponent implements OnInit {
    slides = [{'image': 'assets/cus.jpg'}, {'image': 'assets/ven1.jpg'},{'image': 'assets/employee slide.jpg'}];
    //myimage:string = "C:\Users\Akshaya\Desktop\login portal\src\assets\kaar.jpg";
    form: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
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
                        this.router.navigate(['dashboard']);
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