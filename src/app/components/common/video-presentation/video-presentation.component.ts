import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-video-presentation',
    templateUrl: './video-presentation.component.html',
    styleUrls: ['./video-presentation.component.scss']
})
export class VideoPresentationComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService
    ) { }

    ngOnInit(): void {}

}