import { ensureFileExists } from "./utils/ensureFileExists";
import { TASK_FILE } from "./utils/taskConstants";

console.log("Your tasks for today:");

ensureFileExists(TASK_FILE);
