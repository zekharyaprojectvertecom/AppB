import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SelectItem } from 'src/angular-libraries/models/select-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public formGroup = this.fb.group({
    'holiday': this.fb.control(2)
  })

  public options: SelectItem<number>[] = [
    {
      label: 'Pesach',
      value: 1
    },
    {
      label: 'Shavuot',
      value: 2
    },
    {
      label: 'Succot',
      value: 3
    }
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(console.log)
    setTimeout(() => this.formGroup.controls['holiday'].setValue(3), 2000)
  }

}
