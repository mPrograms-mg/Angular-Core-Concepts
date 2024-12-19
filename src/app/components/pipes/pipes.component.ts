import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  task: FormGroup;
  list: any[] = [];
  filter: string = 'all';
  isEditId: any;
  isEdit = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.task = this.fb.group({
      name: [''],
    });
  }
  onSubmit() {
    console.log(this.task.value);
    this.list.push({ ...this.task.value, completed: false });

    this.task.reset();
  }

  deleteItem(index: number) {
    this.list = this.list.filter((ele, i) => index !== i);
  }

  onEdit(i: any) {
    this.isEditId = i;
    this.isEdit = true;
    this.list.forEach((ele, index) => {
      console.log(ele);
      if (index === i) {
        this.task.patchValue({
          name: ele.name,
        });
      }
    });
  }

  onEditTask() {
    console.log(this.task.value);

    this.list.forEach((ele: any, i: any) => {
      if (this.isEditId === i) {
        ele.name = this.task.get('name').value;
      }
    });
  }

  onComplete(item: any) {
    item.completed = !item.completed;
  }

  setFilter(filter: string) {
    this.filter = filter;
  }

  get filteredList() {
    switch (this.filter) {
      case 'completed':
        return this.list.filter((item) => item.completed);
      case 'pending':
        return this.list.filter((item) => !item.completed);
      default:
        return this.list;
    }
  }
}
