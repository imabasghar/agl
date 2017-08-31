import { PetsModule } from './pets/pets.module';
import { OwnersService } from './shared/owners.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PetsModule
  ],
  providers: [OwnersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
