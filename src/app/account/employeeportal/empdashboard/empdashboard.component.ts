import { Component, OnInit } from '@angular/core';
import { employee } from '@app/_services/employee.service';

@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.less']
})
export class EmpdashboardComponent implements OnInit {
userid:any;
element:any;
myobj:any;
  constructor(private employeeservice:employee) { }

  ngOnInit(): void {
    this.userid = employee.uname;
    console.log(this.userid)
    this.element = document . createElement ( 'script' ); 

    this.element . setAttribute ( 'src' , 'https://cdn.cai.tools.sap/webchat/webchat.js' );
  
    this.element . setAttribute ( 'channelId' , '1efc0c52-adc0-483d-b88c-f126aa8a953b' );
  
    this.element . setAttribute ( 'token' , 'cf1b26227a1def8426f9fb9116cdd8a8' );
  
    this.element . setAttribute ( 'id' , 'cai-webchat' ); 
  
    this.myobj=document .body.appendChild ( this.element );
  }

}
