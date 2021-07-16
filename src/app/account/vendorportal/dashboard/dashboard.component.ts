import { Component, OnInit } from '@angular/core';
import { vendor } from '@app/_services/vendor.service';
declare var $ : any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
userid:any;
  constructor(private vedorservice: vendor) { }

  ngOnInit(): void {
    this.userid = vendor.uname;
    console.log(this.userid)
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });
  }

}
