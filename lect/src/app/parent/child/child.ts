import { Component, Input, Output,EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {


@Output() colorSelected = new EventEmitter<string>();

changeColor(color: string) {
    this.colorSelected.emit(color);
  }

}
