import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        NgZorroAntdModule
    ],
    declarations: [],
    exports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        NgZorroAntdModule
    ]
})
export class SharedModule { }
