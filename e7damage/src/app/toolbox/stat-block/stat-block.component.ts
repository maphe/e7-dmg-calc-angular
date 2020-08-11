import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'stat-block',
  templateUrl: './stat-block.component.html',
  styleUrls: ['./stat-block.component.scss'],
})
export class StatBlockComponent implements OnInit {

  name: string;

  @Input() value: number;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  setValue(value: number) {
    this.value = value;
    this.valueChange.emit(value);
  }

  incValue() {
    this.setValue(this.value + 10);
  }

}
