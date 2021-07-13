import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';




@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.less']
})
export class InquiryComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  dat: Array<any>;
  result:Array<any>;
  selected = "----"

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService) {
    
   }

  ngOnInit(): void {
    var res = this.accountService.customerinquirydetails()
    // this.data = [
    //   { firstName: 'John', lastName: 'Doe', age: '35' },
    //   { firstName: 'Michael', lastName: 'Smith', age: '39' },
    //   { firstName: 'Michael', lastName: 'Jordan', age: '45' },
    //   { firstName: 'Tanya', lastName: 'Blake', age: '47' }
  // ];
    .subscribe(
      data => {
this.dat=[35];
console.log(this.dat);
        console.log("hi"); 
        this.result=data.stat;
          console.log(this.result[0]);
          
          
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
  connect(data:any){
    console.log(data);
    AccountService.salesdoc=data;
    this.router.navigate(["inqdet"]);
  }
  update(e){
    this.selected = e.target.value
    console.log(this.selected);
    AccountService.salesdoc=this.selected;
    this.router.navigate(["inqdet"]);
  }
}
