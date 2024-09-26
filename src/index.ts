import { listTasks } from "./features/listTasks";
import { ensureFileExists } from "./utils/ensureFileExists";
import { TASK_FILE } from "./utils/taskConstants";

ensureFileExists(TASK_FILE);

// Get the command line arguments
const args = process.argv.slice(2);
// First argument will be the command
const command = args[0].toLowerCase();

switch (command) {
  case "list":
    listTasks();
    break;
  default:
    console.log("Please re-check and try again!");
    break;
}
