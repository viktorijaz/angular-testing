import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-button',
  templateUrl: './message-button.component.html',
  styleUrls: ['./message-button.component.css']
})
export class MessageButtonComponent implements OnInit {

    content     = 'you have been warned';
    hideContent = true;
    severity    = 423;
  
    constructor() { }
    // constructor(private msgService: MessageService) { }
    
  
    ngOnInit() {
      // this.content = this.msgService.getContent();
    }
  
    toggle() {
        console.log(this.hideContent)
      this.hideContent = !this.hideContent;
    }

}
