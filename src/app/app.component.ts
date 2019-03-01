import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'HTML',
      content: 'L\'HyperText Markup Language, est le langage de balisage conçu pour représenter les pages web....',
      loveIts: 24,
      createdAt: 'Wed Oct 30 2018 16:33:22'
    },
    {
      title: 'CSS',
      content: 'Le terme CSS est l\'acronyme anglais de Cascading Style Sheets qui peut se traduire par feuilles de style en cascade...',
      loveIts: 0,
      createdAt: 'Wed Oct 27 2018 16:33:22'
    },
    {
      title: 'JS',
      content: 'JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives ...',
      loveIts: -2,
      createdAt: 'Wed Oct 12 2018 16:33:22'
    },
    {
      title: 'Full Stuck',
      content: 'La notion de développeur Full stack a été créée par Randy Schmidt pour cerner le « développeur à tout faire »,…',
      loveIts: 10,
      createdAt: 'Wed Oct 01 2018 16:33:22'
    }
  ];
}
