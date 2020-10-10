import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { PriceComponent } from './components/price/price.component';
import { RouterModule, Routes } from '@angular/router';

//const route: Routes = [{ path: '', component: homec }];
@NgModule({
  declarations: [AppComponent, HomeComponent, PriceComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    // RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
