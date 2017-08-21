import {
    Component,
    OnInit
} from '@angular/core';

import {
    trigger,
    state,
    transition,
    style,
    animate,
    keyframes,
    group
} from '@angular/animations';

@Component({
    selector: 'app-sort-display',
    templateUrl: './sort-display.component.html',
    styleUrls: ['./sort-display.component.less'],
    animations: [
        trigger('numberIndex', [
            state('0', style({ 'transform': 'translateX(0px)' })),
            state('1', style({ 'transform': 'translateX(75px)' })),
            state('2', style({ 'transform': 'translateX(150px)' })),
            state('3', style({ 'transform': 'translateX(225px)' })),
            state('4', style({ 'transform': 'translateX(300px)' })),
            state('5', style({ 'transform': 'translateX(375px)' })),
            state('6', style({ 'transform': 'translateX(450px)' })),
            state('7', style({ 'transform': 'translateX(525px)' })),
            state('8', style({ 'transform': 'translateX(600px)' })),
            state('9', style({ 'transform': 'translateX(675px)' })),
            // transition(':enter', animate('0.5s ease-in'
            // transition(':leave', animate('0.5s ease-out')),
            transition('* => *', animate('0.75s ease-in'))
        ]),
        trigger('direction', [
            state('stable', style({ 'transform': 'translateY(0px) scale(1)' })),
            state('left', style({ 'transform': 'translateY(0px) scale(1)' })),
            state('right', style({ 'transform': 'translateY(0px) scale(1)' })),
            transition('* => left', [
                animate(750, keyframes([
                    style({ 'transform': 'translateY(0px) scale(1)', 'box-shadow': 'none', offset: 0 }),
                    style({ 'transform': 'translateY(-25px) scale(1.1)', 'box-shadow': '2px 2px 2px 2px #ccc', offset: 0.1 }),
                    style({ 'transform': 'translateY(-50px) scale(1.2)', 'box-shadow': '3px 3px 3px 3px #ccc', offset: 0.4 }),
                    style({ 'transform': 'translateY(-50px) scale(1.2)', 'box-shadow': '3px 3px 3px 3px #ccc', offset: 0.5 }),
                    style({ 'transform': 'translateY(-50px) scale(1.2)', 'box-shadow': '3px 3px 3px 3px #ccc', offset: 0.6 }),
                    style({ 'transform': 'translateY(-25px) scale(1.1)', 'box-shadow': '2px 2px 2px 2px #ccc', offset: 0.9 }),
                    style({ 'transform': 'translateY(0px) scale(1)', offset: 1 })
                ]))
            ]),
            transition('* => right', [
                animate(750, keyframes([
                    style({ 'transform': 'translateY(0px) scale(1)', 'box-shadow': 'none', offset: 0 }),
                    style({ 'transform': 'translateY(25px) scale(1.1)', 'box-shadow': '2px 2px 2px 2px #ccc', offset: 0.25 }),
                    style({ 'transform': 'translateY(50px) scale(1.2)', 'box-shadow': '3px 3px 3px 3px #ccc', offset: 0.4 }),
                    style({ 'transform': 'translateY(50px) scale(1.2)', 'box-shadow': '3px 3px 3px 3px #ccc', offset: 0.5 }),
                    style({ 'transform': 'translateY(50px) scale(1.2)', 'box-shadow': '3px 3px 3px 3px #ccc', offset: 0.6 }),
                    style({ 'transform': 'translateY(25px) scale(1.1)', 'box-shadow': '2px 2px 2px 2px #ccc', offset: 0.85 }),
                    style({ 'transform': 'translateY(0px) scale(1)', 'box-shadow': 'none', offset: 1 })
                ]))
            ])
        ])
    ]
})
export class SortDisplayComponent implements OnInit {

    numbers = [];

    sortProcess: Iterator<void>;

    animCount: number = 0;

    clock: any;

    constructor() { }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.animCount = 0;
        let newNumbers = [];
        clearInterval(this.clock);

        for (let i = 0; i < 10; i++) {
            let newNumber = {
                value: Math.floor(Math.random() * 100),
                index: i,
                direction: 'stable',
                selected: false
            };
            newNumbers.push(newNumber);
        }

        this.numbers = newNumbers;
    }

    startSort() {
        this.sortProcess = this.sort();
        this.clock = setInterval(() => {
            if (this.sortProcess.next().done) {
                clearInterval(this.clock);
            }
        }, 800);

    }

    * sort() {

        for (let i = 0; i < this.numbers.length - 1; i++) {

            for (let j = i + 1; j < this.numbers.length; j++) {
                let first = this.numbers.find(n => n.index === i);
                first.selected = true;

                let second = this.numbers.find(n => n.index === j);
                second.selected = true;
                yield;
                if (first.value > second.value) {
                    let tempIndex = first.index;
                    first.index = second.index;
                    second.index = tempIndex;

                    this.animCount += 2;

                    first.direction = 'right';
                    second.direction = 'left';

                }
                yield;
                first.selected = false;
                second.selected = false;
            }
        }
        // debugger;
    }

    numberAnimDone() {
        // if (this.animCount > 0)
        //     this.animCount--;

        // if (this.sortProcess && this.animCount == 0) {
        //     let sortResult = this.sortProcess.next();
        //     if (sortResult.done) {
        //         this.sortProcess = null;
        //     }
        // }
    }

    directionAnimDone(number: any) {
        number.direction = 'stable';
    }

}
