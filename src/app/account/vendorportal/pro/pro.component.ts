import { Component, OnInit } from '@angular/core';
import { vendor } from '@app/_services/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
import { MatDialogConfig } from "@angular/material/dialog";
import { MatDialog } from '@angular/material/dialog';
declare var $:any;
@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.less']
})
export class ProComponent implements OnInit {
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
  var res = this.vedorservice.getprof()

            //.pipe(first())
            .subscribe(
                data => {
                  this.result = data;
                   // console.log("result"+this.result);
                    console.log("res"+this.result);
                    
                    this.userid = this.result.stat;
                    this.country=this.result.stat2;
                    this.firstname=this.result.stat3;
                    this.lastname=this.result.stat4;
                    this.city=this.result.stat5;
                    this.district=this.result.stat6;
                    this.postcode=this.result.stat7;
                    this.street=this.result.stat8;
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
