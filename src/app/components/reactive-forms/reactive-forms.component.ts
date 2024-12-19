import { Component } from '@angular/core';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent {
  title = 'All_In_Angular';
  list: any[] = [];
  isEdit: boolean = false;
  isId: any;
  currentName: string = ''; // Store the name being edited
  filterListType: string = 'All';

  onSubmit(form: any): void {
    // console.log('Form Submitted!', form.value);
    // this.list.push({ ...form.value, completed: false });
    // console.log(this.list);
    // form.reset();

    if (this.isEdit && this.isId !== null) {
      // Update the item in the list
      this.list[this.isId] = {
        ...form.value,
        completed: this.list[this.isId].completed || false,
      };
      this.isEdit = false;
      this.isId = null;
    } else {
      // Add new item
      this.list.push({ ...form.value, completed: false });
    }
    form.reset();
  }

  deleteItem(data: any) {
    console.log(data);
    this.list = this.list.filter((ele) => data.name !== ele.name);
    console.log(this.list);
  }

  onCheck(data: any) {
    data.completed = !data.completed; // Toggle the completed status
  }
  EditItem(i: any) {
    this.isEdit = true;
    this.isId = i;
  }

  setFilter(filterData: any) {
    console.log(filterData);
    this.filterListType = filterData;
  }

  get filterListData() {
    switch (this.filterListType) {
      case 'all':
        return this.list;
      case 'pending':
        return this.list.filter((item) => !item.completed);
      case 'completed':
        return this.list.filter((item) => item.completed);
      default:
        return this.list;
    }
  }
}
