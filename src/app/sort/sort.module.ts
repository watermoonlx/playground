import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { SortDisplayComponent } from './sort-display/sort-display.component';
import { FeatureRoutingModule } from './sort-routing.module';

@NgModule({
    imports: [
        SharedModule,
        FeatureRoutingModule
    ],
    declarations: [SortDisplayComponent],
    exports: [
        SortDisplayComponent
    ]
})
export class SortModule { }
