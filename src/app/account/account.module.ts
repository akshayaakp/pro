import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { MainComponent } from './main/main.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CustdashboardComponent } from './custdashboardlogin/custdashboard.component';
import { CustomerboardComponent } from './customerboard/customerboard.component';
import { CustprofileComponent } from './custprofile/custprofile.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { InquiryComponent } from './inquiry/inquiry.component';
import { InqdetComponent } from './inqdet/inqdet.component';
import { SalesorderComponent } from './salesorder/salesorder.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { FinancialComponent } from './financial/financial.component';
import { CreditComponent } from './credit/credit.component';
import { PaymentComponent } from './payment/payment.component';
import { MasterdataComponent } from './masterdata/masterdata.component';
import { OverallComponent } from './overall/overall.component';
import { CusteditComponent } from './custedit/custedit.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { DashboardComponent } from './vendorportal/dashboard/dashboard.component';
import { LoginpageComponent } from './vendorportal/loginpage/loginpage.component';
import { QuotationComponent } from './vendorportal/quotation/quotation.component';
import { SidebarComponent } from './vendorportal/sidebar/sidebar.component';
import { PoquoComponent } from './vendorportal/poquo/poquo.component';
import { GoodsComponent } from './vendorportal/goods/goods.component';
import { GoodreComponent } from './vendorportal/goodre/goodre.component';
import { PaComponent } from './vendorportal/pa/pa.component';
import { CredmemoComponent } from './vendorportal/credmemo/credmemo.component';
import { DebitmemoComponent } from './vendorportal/debitmemo/debitmemo.component';
import { ProComponent } from './vendorportal/pro/pro.component';
import { ProeditComponent } from './vendorportal/proedit/proedit.component';
import { PurchaseorderComponent } from './vendorportal/purchaseorder/purchaseorder.component';
import { PodetailComponent } from './vendorportal/podetail/podetail.component';
import { PocreComponent } from './vendorportal/pocre/pocre.component';
import { VeninvComponent } from './vendorportal/veninv/veninv.component';
import { VeninvdetComponent } from './vendorportal/veninvdet/veninvdet.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        MatCarouselModule,
       MatTableModule,
       AngularFileUploaderModule
       
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent,
        MainComponent,
    
        CustdashboardComponent,
        CustomerboardComponent,
        CustprofileComponent,
        
        InquiryComponent,
        InqdetComponent,
        SalesorderComponent,
        DeliveryComponent,
        FinancialComponent,
        CreditComponent,
        PaymentComponent,
        MasterdataComponent,
        OverallComponent,
        CusteditComponent,
        InvoiceComponent,
        
        DashboardComponent,
        
        LoginpageComponent,
        
        QuotationComponent,
        
        SidebarComponent,
        
        PoquoComponent,
        
        GoodsComponent,
        
        GoodreComponent,
        
        PaComponent,
        
        CredmemoComponent,
        
        DebitmemoComponent,
        
        ProComponent,
        
        ProeditComponent,
        
        PurchaseorderComponent,
        
        PodetailComponent,
        
        PocreComponent,
        
        VeninvComponent,
        
        VeninvdetComponent
        
        
    ]
})
export class AccountModule { }