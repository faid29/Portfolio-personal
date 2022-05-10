import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Soft } from 'src/app/model/soft.model';


@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {

  @Input() soft!: Soft;
  @Output() borrarS: EventEmitter<number> = new EventEmitter();
  @Output() editarS: EventEmitter<Soft> = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {}

  borrarSoft(): void {
    this.borrarS.emit(this.soft.id);
  }

  editarSoft(): void {
    this.editarS.emit(this.soft);
  }
}
