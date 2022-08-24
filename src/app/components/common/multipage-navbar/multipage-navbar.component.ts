import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-multipage-navbar',
    templateUrl: './multipage-navbar.component.html',
    styleUrls: ['./multipage-navbar.component.scss']
})
export class MultipageNavbarComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    switcherClassApplied = false;
    switcherToggleClass() {
        this.switcherClassApplied = !this.switcherClassApplied;
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}