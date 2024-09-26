import fs from "fs";

export function ensureFileExists(filePath: string) {
  if (fs.existsSync(filePath) == false) {
    fs.writeFileSync(filePath, "[]");
  }
}
