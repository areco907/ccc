import { Component } from '@angular/core';
import { JsonProvider } from '../../commons/providers/json.provider';

@Component({
  selector: 'component-example',
  templateUrl: 'component-example.html'
})
export class ComponentExampleComponent {

  text: string;

  constructor(private jsonProvider: JsonProvider) {
    this.text = jsonProvider.messages.componentExample.exampleText;
  }

}
