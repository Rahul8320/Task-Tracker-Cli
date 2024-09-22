import { TaskStatus } from "../enums/TaskStatus";

export interface Task {
  id: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}
