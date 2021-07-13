import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {  MatTableModule } from '@angular/material/table';
import {  MatPaginatorModule } from '@angular/material/paginator';
import{ MatButtonModule } from '@angular/material/button';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';import { QuotationComponent } from './account/vendorportal/quotation/quotation.component';import { GoodreComponent } from './account/vendorportal/goodre/goodre.component';
;





@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
         AppRoutingModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
        MatTableModule,
        MatButtonModule,
        MatCarouselModule,
        MatDialogModule
        
        
        
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        
          ],
    providers: [
        //{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        
    ],
    bootstrap: [AppComponent],
    entryComponents:[QuotationComponent,GoodreComponent],
    
})
export class AppModule { };