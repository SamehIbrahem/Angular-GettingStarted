import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list.component';
import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/StarComponent';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ConvertToSpaces,
        StarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
