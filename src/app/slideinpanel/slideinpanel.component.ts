import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'slide-in-panel',
  templateUrl: './slideinpanel.component.html',
  styleUrls: ['./slideinpanel.component.css']
})
export class SlideInPanelComponent {
  name = 'Angular ' + VERSION.major;
  constructor() {
    console.log('Inside SlideInPanelComponent')
  }
}
