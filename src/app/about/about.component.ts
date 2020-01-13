import { Component, OnInit } from '@angular/core';
import { version } from '../../../package.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public devportalVersion: string;

  constructor() { }

  /**
   * Set version during initialization
   */
  ngOnInit() {
    this.devportalVersion = version;
  }

}