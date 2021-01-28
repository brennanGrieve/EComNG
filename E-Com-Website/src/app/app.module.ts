import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { TopBarComponent } from '@src/app/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule  } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from'@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from '@src/app/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from '@src/app/contact-page/contact-page.component'; 
import { SignInPageComponent } from '@src/app/sign-in-page/sign-in-page.component';
import { CartPageComponent } from '@src/app/cart-page/cart-page.component';
import { SearchPageComponent } from '@src/app/search-page/search-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { StoreDataClientService } from '@src/app/store-data-client-service.service';
import { ProductDetailsComponent } from '@src/app/product-details/product-details.component';
import { ProductGridComponent } from '@src/app/product-grid/product-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    ContactPageComponent,
    SignInPageComponent,
    CartPageComponent,
    SearchPageComponent,
    ProductDetailsComponent,
    ProductGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatRippleModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path : '', component : HomePageComponent },
      { path : 'contactUs', component : ContactPageComponent },
      { path : 'signIn', component : SignInPageComponent },
      { path : 'myCart', component : CartPageComponent },
      { path : 'search', component : SearchPageComponent },
      { path : 'products/:productId', component : ProductDetailsComponent},
    ]),
  HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
