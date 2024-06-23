import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
})
export class ToDoComponent {
  title: string = 'To Do List Application';
  image: string =
    'data:image/png;base64,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';
  tasks: string[] = [];
  newTask: string = '';
  isAvalible: boolean = false;

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
      this.isAvalible = true;
    }
    // console.log(this.tasks);
    // console.log(this.newTask);
  }

  // editTask(index:number){
  //   let updateTask = prompt("Edit task", this.tasks[index]);
  //   if(updateTask!==null){
  //     this.tasks[index]=updateTask.trim()
  //   }
  // }

  editTask(index: number, newTaskEdit: string): string | void {
    const trimedTask = newTaskEdit.trim();
    if (newTaskEdit.trim() !== '') {
      this.tasks[index] = trimedTask;
    } else {
      newTaskEdit = this.tasks[index];
      return (this.newTask = newTaskEdit);
    }
    this.newTask = '';
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.isAvalible = this.tasks.length > 0;
  }
}
