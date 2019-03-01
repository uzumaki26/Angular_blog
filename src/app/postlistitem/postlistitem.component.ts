import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdAt: Date;

  constructor() { }

  ngOnInit() {
  }

  onDontLoveIt() {
    this.loveIts--;
    // console.log('Not love ' + this.loveIts);
  }

  onLoveIt() {
    this.loveIts++;
    // console.log('love ' + this.loveIts);
  }
}
