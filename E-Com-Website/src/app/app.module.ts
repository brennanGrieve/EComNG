import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule  } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DummyStoreDataService } from './dummy-store-data.service';
import { StoreDataClientService } from './store-data-client-service.service';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    ProductPageComponent,
    ContactPageComponent,
    SignInPageComponent,
    CartPageComponent,
    SearchPageComponent,
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
    FormsModule,
    RouterModule.forRoot([
      { path : '', component : HomePageComponent },
      { path : 'productList', component : ProductPageComponent },
      { path : 'contactUs', component : ContactPageComponent },
      { path : 'signIn', component : SignInPageComponent },
      { path : 'myCart', component : CartPageComponent },
      { path : 'search', component : SearchPageComponent },
    ]),
  HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(
    DummyStoreDataService, {dataEncapsulation: false}
  ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
