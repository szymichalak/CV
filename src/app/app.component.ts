import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cv';

  techniques = ['Angular', 'Bootstrap', 'Angular Material', 'NgRx', 'CSS', 'HTML', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'Kotlin', 'Selenium', 'C', 'Git', 'REST API', 'Scrum'];
  opSystems = ['MS Windows', 'Linux'];
  IDEs = ['IntelliJ', 'PyCharm', 'MS Visual Studio Code'];
  languages = ['angielski - zaawansowany', 'niemiecki - podstawowy'];
  additionalInfo = ['Prawo jazdy kat. B', 'Stopień Przewodnika ZHP'];
  hobbies = ['Pływanie oraz morsowanie', 'Oglądanie angielskiej piłki nożnej', 'Podróżowanie', 'Samoloty', 'Gry planszowe']
}
