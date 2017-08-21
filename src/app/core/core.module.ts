import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        ContentComponent
    ],
    exports: [
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        ContentComponent
    ]
})
export class CoreModule { }
