import { NgModule } from '@angular/core';
import {
    RouterModule,
    Router,
    Routes
} from '@angular/router';

import { SortDisplayComponent } from './sort-display/sort-display.component';



const routes: Routes = [
    { path: 'sort', component: SortDisplayComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
