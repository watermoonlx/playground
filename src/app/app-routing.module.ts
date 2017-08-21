import {
    NgModule
} from '@angular/core';
import {
    RouterModule,
    Router,
    Routes
} from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/sort', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
