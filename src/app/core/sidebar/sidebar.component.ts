import {
    Component,
    OnInit,
    Input
} from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

    @Input() isCollapsed;

    constructor() { }

    ngOnInit() {
    }

}
