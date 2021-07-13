import { Component, OnInit } from '@angular/core';
import { vendor } from '@app/_services/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';
declare var $:any;
@Component({
  selector: 'app-pa',
  templateUrl: './pa.component.html',
  styleUrls: ['./pa.component.less']
})
export class PaComponent implements OnInit {
  selected = "----";
  selectedgroup:any;
  result:Array<any>;
  form: FormGroup;
  loading = false;
    submitted = false;
    returnUrl: string;
  constructor(private vedorservice: vendor,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService) { }

  ngOnInit(): void {
    $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
  });
  var res = this.vedorservice.getpa()
    
    .subscribe(
      data => {
        this.result = data.stat;
          console.log(this.result[0]);
      },

      error => {
          console.log("error"+error);
          this.alertService.error(error);
          this.loading = false;
      });
  }

}
