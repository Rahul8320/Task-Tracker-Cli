import fs from "fs";
import { Task } from "../models/task.model";
import { TASK_FILE } from "../utils/taskConstants";

export function loadTasks(): Task[] {
  const tasks = fs.readFileSync(TASK_FILE, "utf-8");
  return JSON.parse(tasks) as Task[];
}
