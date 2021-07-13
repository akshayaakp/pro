import { Component, OnInit } from '@angular/core';
import { AccountService, AlertService } from '@app/_services';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  form: FormGroup;
  loading = false;
    submitted = false;
    returnUrl: string;
  slides = [{'image': 'assets/customer.png'}, {'image': 'assets/vendor.jpg'},{'image': 'assets/employee slide.jpg'}, {'image': 'https://therichpost.com/wp-content/uploads/2020/11/Reactjs-Easy-Shop-Free-Template-with-Source-Code.png'}, {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'}];

  constructor(private accountService: AccountService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
    ) { }

  logout() {
    this.accountService.logout();
}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
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
    var res = this.accountService.login(this.f.username.value, this.f.password.value)

        //.pipe(first())
        .subscribe(
            data => {
               // console.log("result"+data);
                if(data.stat == "true")
                {
                    console.log("hello");
                    var text="Login successful";
                   
                    this.router.navigate(['customerdashboard']);
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
            //console.log("response"+localStorage.getItem("return"));
  

}}
