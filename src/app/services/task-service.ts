import { Injectable, signal } from '@angular/core';

export interface Task{
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSignal = signal([
  {
    id: 1,
    title: "Review Pull Requests",
    description: "Check the new authentication feature and leave comments on GitHub.",
    completed: false,
    createdAt: new Date('2026-03-25'),
  },
  {
    id: 2,
    title: "Fix Navigation Bug",
    description: "Resolve the EPERM error and fix the folder renaming issue in the Todo project.",
    completed: true,
    createdAt: new Date('2026-03-26'),
  },
  {
    id: 3,
    title: "Study Angular Signals",
    description: "Deep dive into signal effects and computed properties for better performance.",
    completed: false,
    createdAt: new Date('2026-03-27'),
  },
  {
    id: 4,
    title: "Update Project Documentation",
    description: "Write the README.md file and explain the new dark mode UI.",
    completed: false,
    createdAt: new Date('2026-03-28'),
  },
  {
    id: 5,
    title: "Daily Stand-up Meeting",
    description: "Discuss today's progress and potential blockers with the team.",
    completed: true,
    createdAt: new Date('2026-03-28'),
  }
]);

  tasks = this.tasksSignal.asReadonly();

}
