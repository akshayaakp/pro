import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '@app/_services';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService} from '@app/_services';
import { vendor } from '@app/_services/vendor.service';
declare var $ : any;
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.less']
})
export class LoginpageComponent implements OnInit {
  form: FormGroup;
  loading = false;
    submitted = false;
    returnUrl: string;
  constructor( private vendorservice: vendor,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService) { }

  ngOnInit(): void {this.form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  $(function() {
    'use strict';
    
    $('.form-control').on('input', function() {
      var $field = $(this).closest('.form-group');
      if (this.value) {
        $field.addClass('field--not-empty');
      } else {
        $field.removeClass('field--not-empty');
      }
    });
  
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
    var res = this.vendorservice.login(this.f.username.value, this.f.password.value)

        //.pipe(first())
        .subscribe(
            data => {
               // console.log("result"+data);
                if(data.stat == "TRUE")
                {
                    console.log("hello");
                    var text="Login successful";
                   
                    this.router.navigate(['vendash']);
                }
                else{
                  var text="Invalid Username or Password";
                  this.alertService.error(text)
                  this.loading=false;
                  
                    console.log("error");
                    
                }
               // console.log("url"+this.returnUrl);
            },

            error => {
                console.log("error"+error);
                this.alertService.error(error);
                this.loading = false;
            });

}}
