import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lifecycle';
  myValue: string | undefined;
  display: boolean = true;
  buttonDisplay: string = 'Remove';
  public storeValue(sub: { value: string | undefined; }):void {
    this.myValue = sub.value;
  }
  public componentDisplay() {
    this.display = !this.display;
    if (this.buttonDisplay === 'Remove') {
      this.buttonDisplay = 'Add'
    } else {
      this.buttonDisplay = 'Remove'
    }
  }
}
