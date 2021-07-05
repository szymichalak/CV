import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cv';
  panelOpenState = false;
  printPDF = false;

  techniques = ['Angular', 'Bootstrap', 'Angular Material', 'NgRx', 'CSS', 'HTML', 'JavaScript', 'TypeScript', 'RxJS', 'Python', 'SQL', 'Kotlin', 'Selenium', 'Leaflet', 'C', 'Git', 'REST API', 'Scrum', 'Docker'];
  opSystems = ['MS Windows', 'Linux'];
  IDEs = ['IntelliJ', 'PyCharm', 'MS Visual Studio Code'];
  languages = ['angielski - zaawansowany', 'niemiecki - podstawowy'];
  additionalInfo = ['Prawo jazdy kat. B', 'Stopień Przewodnika ZHP'];
  hobbies = ['Pływanie oraz morsowanie', 'Oglądanie angielskiej piłki nożnej', 'Podróżowanie', 'Samoloty', 'Gry planszowe']
}
