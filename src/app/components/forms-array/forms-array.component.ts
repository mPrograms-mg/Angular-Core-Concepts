import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-array',
  templateUrl: './forms-array.component.html',
  styleUrls: ['./forms-array.component.scss'],
})
export class FormsArrayComponent implements OnInit {
  skillsForm: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.skillsForm = this._fb.group({
      skills: this._fb.array([]),
    });
  }
  get skills() {
    return this.skillsForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this._fb.control('', Validators.required));
  }

  // Remove a control from the FormArray
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  // Handle form submission
  onSubmit() {
    console.log(this.skillsForm.value);
  }
}
