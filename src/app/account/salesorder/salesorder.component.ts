import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
@Component({
  selector: 'app-salesorder',
  templateUrl: './salesorder.component.html',
  styleUrls: ['./salesorder.component.less']
})
export class SalesorderComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  result:Array<any>;
  
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    var res = this.accountService. getsalesdetails()
    // this.data = [
    //   { firstName: 'John', lastName: 'Doe', age: '35' },
    //   { firstName: 'Michael', lastName: 'Smith', age: '39' },
    //   { firstName: 'Michael', lastName: 'Jordan', age: '45' },
    //   { firstName: 'Tanya', lastName: 'Blake', age: '47' }
  // ];
    .subscribe(
      data => {
        this.result=data.stat;
        

        console.log("result please"+JSON.stringify(data.stat[0].SD_DOC._text));

          
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
  convert(data:any)
  {
return JSON.stringify(data);
  }

}
