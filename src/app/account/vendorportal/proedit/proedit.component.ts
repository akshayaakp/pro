import { Component, OnInit } from '@angular/core';
import { vendor } from '@app/_services/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
import { MatDialogConfig } from "@angular/material/dialog";
import { MatDialog } from '@angular/material/dialog';
declare var $:any;
@Component({
  selector: 'app-proedit',
  templateUrl: './proedit.component.html',
  styleUrls: ['./proedit.component.less']
})
export class ProeditComponent implements OnInit {
  selected = "----";
  selectedgroup:any;
  result:any;
  form: FormGroup;
  loading = false;
    submitted = false;
    returnUrl: string;
  constructor(private vedorservice: vendor,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private dialog:MatDialog) { }
        userid:any;
        city:any;
        firstname:any;
        country:any;
        street:any;
        district:any;
        lastname:any;
        postcode:any;

  ngOnInit(): void {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
      
  });
  this.loading = false;
    this.form = this.formBuilder.group({
      city: ['', Validators.required],
      country: ['', Validators.required],
      firstname: ['', Validators.required],
      userid: ['', Validators.required],
      district:['',Validators.required],
      lastname:['',Validators.required],
      postcode:['',Validators.required],
      street:['',Validators.required],
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
    console.log(this.f.userid.value);
    var res = this.vedorservice.getprofedit(this.f.userid.value, this.f.firstname.value, this.f.lastname.value, this.f.street.value, this.f.city.value, this.f.district.value,this.f.postcode.value,this.f.country.value)

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
