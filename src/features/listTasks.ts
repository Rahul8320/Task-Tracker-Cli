import fs from "fs";
import { Task } from "../models/task.model";
import { TASK_FILE } from "../utils/taskConstants";
import { TaskStatus } from "../enums/TaskStatus";

// Load all tasks
export function loadTasks(): Task[] {
  const tasks = fs.readFileSync(TASK_FILE, "utf-8");
  return JSON.parse(tasks) as Task[];
}

// List all tasks
export function listTasks(): void {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log("No tasks found.");
  } else {
    console.log("Your tasks:");
    tasks.forEach((task) => {
      console.log(
        `${task.id}. ${task.description} [${
          task.status === TaskStatus.DONE ? "✅" : "⌛"
        }]`
      );
    });
  }
}
