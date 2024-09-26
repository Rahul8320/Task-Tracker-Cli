import { ensureFileExists } from "./utils/ensureFileExists";

const filePath = "tasks.json";

console.log("Your tasks for today:");

ensureFileExists(filePath);
