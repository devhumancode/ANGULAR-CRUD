import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberplateComponent } from './numberplate/numberplate.component';
import { NumberplateItemComponent } from './numberplate-item/numberplate-item.component';
import { AddNumberplateComponent } from './add-numberplate/add-numberplate.component';
import { EditingModalComponent } from './editing-modal/editing-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberplateComponent,
    NumberplateItemComponent,
    AddNumberplateComponent,
    EditingModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
