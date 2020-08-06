import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() modalMode = false;
  @Input() group: FormGroup;
  @Output() addNumberplate = new EventEmitter<void>();
}
