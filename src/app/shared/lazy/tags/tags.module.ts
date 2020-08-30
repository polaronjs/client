import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { TagSearchComponent } from './tag-search/tag-search.component';
import { TagComponent } from './tag/tag.component';

// modules
import { IncludedModule } from '@included/included.module';
import { DropdownModule } from '@lazy/dropdown/dropdown.module';
import { MenuListModule } from '@lazy/menu-list/menu-list.module';
import { SelectModule } from '@lazy/select/select.module';

@NgModule({
  imports: [
    CommonModule,
    IncludedModule,
    DropdownModule,
    MenuListModule,
    SelectModule,
  ],
  declarations: [TagSearchComponent, TagComponent],
  exports: [TagSearchComponent, TagComponent],
})
export class TagsModule {}
