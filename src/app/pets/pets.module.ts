import { FilterOnTypePipe } from './shared/filter-on-type.pipe';
import { SortByPipe } from '../shared/sort.pipe';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetsService } from './shared/pets.service';
import { PetsComponent } from './pets.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    PetsComponent,
    PetsListComponent,
    SortByPipe,
    FilterOnTypePipe
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    PetsListComponent
  ],
  providers: [PetsService]
})
export class PetsModule {
}
