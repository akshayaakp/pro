import { Component, OnInit } from '@angular/core';
import { vendor } from '@app/_services/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
import { MatDialogConfig } from "@angular/material/dialog";
import { MatDialog } from '@angular/material/dialog';
import { analyzeAndValidateNgModules } from '@angular/compiler';
declare var $:any;
@Component({
  selector: 'app-pocre',
  templateUrl: './pocre.component.html',
  styleUrls: ['./pocre.component.less']
})
export class PocreComponent implements OnInit {
  selected = "----";
  selectedgroup:any;
  result:any;
  form: FormGroup;
  loading = false;
  uname:any;
    submitted = false;
    returnUrl: string;
  constructor(private vedorservice: vendor,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private dialog:MatDialog) { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
      
  });
  this.uname = vendor.uname;
  this.loading = false;
  
    this.form = this.formBuilder.group({
      compcode: ['', Validators.required],
      ino: ['', Validators.required],
      matdesc: ['', Validators.required],
      matno: ['', Validators.required],
      plant:['',Validators.required],
      pg:['',Validators.required],
      porg:['',Validators.required],
      qty:['',Validators.required],
      raised:['',Validators.required],
      userid:['',Validators.required]
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
    var res = this.vedorservice.getpocre(this.f.compcode.value, this.f.ino.value, this.f.matdesc.value, this.f.matno.value, this.f.plant.value, this.f.pg.value,this.f.porg.value,this.f.qty.value,this.f.raised.value,this.f.userid.value)

        //.pipe(first())
        .subscribe(
            data => {
               // console.log("result"+data);
                if(data.stat == "E")
                {
                  this.loading = false;
                  var text="Purchase Order is not created";
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


