import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.less']
})
export class DeliveryComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  result:Array<any>;
  result1:Array<any>;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    var res = this.accountService. getlistdelivery()
    .subscribe(
      data => {
        this.result=data.stat;
        this.result1=data.stat1;
        

        console.log("result please"+JSON.stringify(data.stat[0].MANDT._text));
        console.log("result please"+JSON.stringify(data.stat1[0]));


          
        // }
// for (let index = 0; index < 50; index++) {
//   this.result.push([JSON.stringify(data.stat[index])]);
//   // this.result[index]=JSON.stringify(data.stat[index]);
//         console.log("result"+this.result[index]);
// }
        
      },

      error => {
          console.log("error"+error);
          this.alertService.error(error);
          this.loading = false;
      });

  
  }

}
