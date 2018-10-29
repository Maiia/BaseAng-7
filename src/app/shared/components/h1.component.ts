import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'bb-h1',
  template: '<h1>{{title}}</h1><ng-content></ng-content>',
  styles: [':host { font-weight: bold; }']
})
export class H1 implements OnInit {
  @Input()
  title = 'Default title';

  constructor(private translate: TranslateService) {}

  // -----------------------------------------
  // Component Lifecycle methods
  // -----------------------------------------

  ngOnInit() {}
}
