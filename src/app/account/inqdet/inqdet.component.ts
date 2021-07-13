import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
@Component({
  selector: 'app-inqdet',
  templateUrl: './inqdet.component.html',
  styleUrls: ['./inqdet.component.less']
})
export class InqdetComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  result:Array<any>;
  val1:any;
  val2:any;
  val3:any;
  val4:any;
  val5:any;
  val6:any;
  val7:any;
  val8:any;
  val9:any;
  val10:any;
  val11:any;
  val12:any;
  val13:any;
  val14:any;
  val15:any;
  lal1:any;
  lal2:any;
  lal3:any;
  lal4:any;
  lal5:any;
  lal6:any;
  lal7:any;
  lal8:any;
  lal9:any;
  lal10:any;
  lal11:any;
  lal12:any;
  lal13:any;
  lal14:any;
  lal15:any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      salesdoc: ['', Validators.required],
    
  });
  console.log(AccountService.salesdoc);
  var res = this.accountService. getinquirydetails(AccountService.salesdoc)

      //.pipe(first())
      .subscribe(
          data => {
            
            //this.result=data.stat;
            // console.log("hi"+);
            this.val2=data.stat[0].DOC_NUMBER._text;
            this.val1=data.stat[0].OPERATION._text;
            this.val3=data.stat[0].REC_DATE._text;
            this.val4=data.stat[0].REC_TIME._text;
            this.val5=data.stat[0].CREATED_BY._text;
            this.val6=data.stat[0].QT_VALID_F._text;
            this.val7=data.stat[0].QT_VALID_T._text;
            this.val8=data.stat[0].DOC_DATE._text;
            this.val9=data.stat[0].SD_DOC_CAT._text;
            this.val10=data.stat[0].TRAN_GROUP._text;
            this.val11=data.stat[0].CURRENCY._text;
            this.val12=data.stat[0].CURREN_ISO._text;
            this.val13=data.stat[0].SALES_ORG._text;
            this.val14=data.stat[0].DISTR_CHAN._text;
            this.val15=data.stat[0].DIVISION._text;
            //inquiry line details
            this.lal2=data.stat2[0].DOC_NUMBER._text;
            this.lal1=data.stat2[0].OPERATION._text;
            this.lal3=data.stat2[0].ITM_NUMBER._text;
            this.lal4=data.stat2[0].MATERIAL._text;
            this.lal5=data.stat2[0].MAT_ENTRD._text;
            this.lal6=data.stat2[0].MATL_GROUP._text;
            this.lal7=data.stat2[0].SHORT_TEXT._text;
            this.lal8=data.stat2[0].ITEM_CATEG._text;
            this.lal9=data.stat2[0].HG_LV_ITEM._text;
            this.lal10=data.stat2[0].ALTERN_ITM._text;
            this.lal11=data.stat2[0].OUT_AGR_TA._text;
            this.lal12=data.stat2[0].TARGET_QTY._text;
            this.lal13=data.stat2[0].TARGET_QU._text;
            this.lal14=data.stat2[0].T_UNIT_ISO._text;
            this.lal15=data.stat2[0].BASE_UOM._text;
          

            // this.val1=data.stat[0].;
            
            console.log(data.stat[0].OPERATION._text);
            //console.log("output please"+data.stat.OPERATION._text);
          },

          error => {
              console.log("error"+error);
              this.alertService.error(error);
              this.loading = false;
          });

  
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
  
  }

}
