import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-nested-form-group-array',
  templateUrl: './nested-form-group-array.component.html',
  styleUrls: ['./nested-form-group-array.component.scss'],
})
export class NestedFormGroupArrayComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      dec: ['', Validators.required],
      service: this.fb.group({
        services_Dec: ['', Validators.required],
        technologies: ['', Validators.required],
        servArray: this.fb.array([this.dynamicArr()]), // Adding a default value in the FormArray
      }),
      benefits: this.fb.group({
        benefits_Dec: ['', Validators.required],
        benefits_technologies: ['', Validators.required],
        bene_serArr: this.fb.array([this.dynamicArr()]), // Adding a default value in the FormArray
      }),
      image: [null, Validators.required], // Adding the image field
    });
  }

  // Helper method to create a FormGroup for the dynamic array
  dynamicArr(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required], // Example control for the dynamic group
      description: ['', Validators.required], // Another example control
    });
  }

  // Getter for the FormArray
  get servArray(): FormArray {
    return this.myForm.get('service.servArray') as FormArray;
  }

  get benefitserArray(): FormArray {
    return this.myForm.get('benefits.bene_serArr') as FormArray;
  }

  // Method to add a new group to the FormArray
  addServiceGroup(): void {
    this.servArray.push(this.dynamicArr());
  }

  addBenefitArry(): void {
    this.benefitserArray.push(this.dynamicArr());
  }

  // Method to remove a group from the FormArray
  removeServiceGroup(index: number): void {
    this.servArray.removeAt(index);
  }

  removeBenefitGrp(index: number): void {
    this.benefitserArray.removeAt(index);
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.myForm.patchValue({ image: input.files[0] });
    }
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      const formData = new FormData();

      // Append top-level fields
      formData.append('title', this.myForm.get('title')?.value);
      formData.append('dec', this.myForm.get('dec')?.value);
      formData.append('image', this.myForm.get('image')?.value);

      // Append service fields
      const service = this.myForm.get('service')?.value;
      formData.append('services_Dec', service.services_Dec);
      formData.append('technologies', service.technologies);

      // Append FormArray fields
      const servArray = this.myForm.get('service.servArray')?.value;
      servArray.forEach((item: any, index: number) => {
        formData.append(`servArray[${index}][name]`, item.title);
        formData.append(`servArray[${index}][description]`, item.description);
      });

      formData.forEach((value, key) => {
        console.log(key, value);
      });
      console.log('FormData:', formData);

      // console.log(this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
