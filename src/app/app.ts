import { Component, OnInit } from '@angular/core';
import { RestApiService } from './services/rest-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
})
export class App implements OnInit {
  todoItems: any[] = [];
  todoItem = { name: '', isComplete: false };
  selectedTodoItemId: string | null = null;

  constructor(private api: RestApiService) { }

  ngOnInit() {
    this.loadTodoItems();
  }

  loadTodoItems() {
    this.api.getTodoItems().subscribe(data => {
      this.todoItems = data;
    });
  }

  saveTodoItem() {
    if (this.selectedTodoItemId) {
      this.api.putTodoItem(this.selectedTodoItemId, this.todoItem).subscribe(() => {
        this.resetForm();
        this.loadTodoItems();
      });
    } else {
      this.api.postTodoItem(this.todoItem).subscribe(() => {
        this.resetForm();
        this.loadTodoItems();
      });
    }
  }

  editTodoItem(todoItem: any) {
    this.todoItem = { name: todoItem.name, isComplete: todoItem.isComplete };
    this.selectedTodoItemId = todoItem._id;
  }

  deleteTodoItem(id: string) {
    this.api.deleteTodoItem(id).subscribe(() => {
      this.loadTodoItems();
    });
  }

  resetForm() {
    this.todoItem = { name: '', isComplete: false };
    this.selectedTodoItemId = null;
  }
}