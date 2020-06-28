import { Component, OnInit } from '@angular/core';
import { timer, Observable, of } from 'rxjs';

import { JokesService } from '../services/jokes.service';

@Component({
  selector: 'app-message-button',
  templateUrl: './message-button.component.html',
  styleUrls: ['./message-button.component.css'],
})
export class MessageButtonComponent implements OnInit {
  contentObservable: Observable<any>;
  content = 'you have been warned';
  hideContent = true;
  severity = 423;

  constructor(private jokesService: JokesService) {}

  ngOnInit() {
    this.contentObservable = this.jokesService.getJokes();
  }

  toggle() {
    console.log(this.hideContent);
    this.hideContent = !this.hideContent;
  }

  toggleAsync() {
    timer(500).subscribe(() => {
      this.toggle();
    });
  }
}
