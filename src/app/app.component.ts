import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'bb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'binck';

  param = { value: 'world' };
  currentLang = 'en';

  constructor(private translate: TranslateService) {
    this.changeLang(this.currentLang);

    this.param.value = this.currentLang === 'en' ? 'world' : 'мир';
  }

  changeLang(lang) {
    this.translate.setDefaultLang(lang);

    this.translate.use(lang);

    this.currentLang = lang;

    console.log('lang:', this.translate.getDefaultLang());

    this.param.value = this.currentLang === 'en' ? 'world' : 'мир';
  }
}
