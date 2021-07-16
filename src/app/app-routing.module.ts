import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaymentComponent} from './account/payment/payment.component';
import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import {MainComponent} from './account/main/main.component';
import{InqdetComponent} from './account/inqdet/inqdet.component';
import { CustdashboardComponent } from './account/custdashboardlogin/custdashboard.component'; 
import { CustomerboardComponent } from './account/customerboard/customerboard.component';
import{InquiryComponent} from './account/inquiry/inquiry.component';
import { CustprofileComponent } from './account/custprofile/custprofile.component';
import{SalesorderComponent} from './account/salesorder/salesorder.component';
import{DeliveryComponent} from './account/delivery/delivery.component';
import{FinancialComponent} from './account/financial/financial.component';
import{CreditComponent} from './account/credit/credit.component';
import{MasterdataComponent} from './account/masterdata/masterdata.component';
import{OverallComponent} from './account/overall/overall.component';
import{CusteditComponent} from './account/custedit/custedit.component';
import{InvoiceComponent} from './account/invoice/invoice.component';
import { DashboardComponent } from './account/vendorportal/dashboard/dashboard.component';
import{LoginpageComponent} from './account/vendorportal/loginpage/loginpage.component';
import{GoodsComponent} from './account/vendorportal/goods/goods.component';
import{QuotationComponent} from './account/vendorportal/quotation/quotation.component';
import{PoquoComponent} from './account/vendorportal/poquo/poquo.component';
import {GoodreComponent} from './account/vendorportal/goodre/goodre.component';
import {PaComponent} from './account/vendorportal/pa/pa.component';
import { CredmemoComponent } from './account/vendorportal/credmemo/credmemo.component';
import { DebitmemoComponent } from './account/vendorportal/debitmemo/debitmemo.component';
import { ProComponent } from './account/vendorportal/pro/pro.component';
import { ProeditComponent } from './account/vendorportal/proedit/proedit.component';
import {PurchaseorderComponent} from './account/vendorportal/purchaseorder/purchaseorder.component';
import { PodetailComponent } from './account/vendorportal/podetail/podetail.component';
import { PocreComponent } from './account/vendorportal/pocre/pocre.component';
import { VeninvComponent } from './account/vendorportal/veninv/veninv.component';
import { VeninvdetComponent } from './account/vendorportal/veninvdet/veninvdet.component';
//import{usersComponent} from './users';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);


const routes: Routes = [
    //{ path: 'home',component:HomeComponent},
    //{ path: 'users', component:usersComponent},
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'dashboard', component:MainComponent},
    { path: 'custprofile',component:CustprofileComponent},
    { path: 'custdashboard',component:CustdashboardComponent},
    { path: 'customerdashboard',component:CustomerboardComponent},
    { path: 'inquiry',component:InquiryComponent},
    { path: 'inqdet',component:InqdetComponent},
    { path: 'salesorder',component:SalesorderComponent},
    { path: 'delivery',component:DeliveryComponent},
    { path: 'financial',component:FinancialComponent},
    { path: 'payment',component:PaymentComponent},
    { path: 'credit',component:CreditComponent},
    { path: 'master',component:MasterdataComponent},
    { path: 'overall',component:OverallComponent},
    { path: 'edit',component:CusteditComponent},
    { path: 'invoice',component:InvoiceComponent},
    { path: 'vendash',component:DashboardComponent},
    { path: 'venlogin',component:LoginpageComponent},
    { path: 'venquo',component:QuotationComponent},
    { path: 'poquo',component:PoquoComponent},
    { path: 'vengoods',component:GoodsComponent},
    { path: 'vengoodsre',component:GoodreComponent},
    { path: 'venpa',component:PaComponent},
    { path: 'vencred',component:CredmemoComponent},
    { path: 'vendeb',component:DebitmemoComponent},
    { path: 'venpro',component:ProComponent},
    { path: 'venproedit',component:ProeditComponent},
    { path: 'venpo',component:PurchaseorderComponent},
    { path: 'venpod',component:PodetailComponent},
    { path: 'venpocre',component:PocreComponent},
    { path: 'veninv',component:VeninvComponent},
    { path: 'veninvdet',component:VeninvdetComponent},
    


    // otherwise redirect to home
    { path: 'account/login', redirectTo: '/dashboard' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }