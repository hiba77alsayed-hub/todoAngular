import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-details',
  imports: [],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css',
})
export class TaskDetails {
  route = inject(ActivatedRoute);
  taskId = signal<number | null>(null);
  constructor(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.taskId.set(Number(id));
    }
  }
}
