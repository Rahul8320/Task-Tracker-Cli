import fs from "fs";
import { ensureFileExists } from "../src/utils/ensureFileExists";

// Mock the 'fs' module methods
jest.mock("fs");

describe("Ensure File Exists", () => {
  const filePath = "test.json";

  beforeEach(() => {
    // Clear any mocks before each test
    jest.clearAllMocks();
  });

  it("Should create json file if doesn't exists", () => {
    // Mock fs.existsSync to return false (file does not exist)
    (fs.existsSync as jest.Mock).mockReturnValue(false);

    ensureFileExists(filePath);

    expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, "[]");
    expect(fs.writeFileSync).toHaveBeenCalledTimes(1);
  });

  it("Should not overwrite an existing json file", () => {
    // Mock fs.existsSync to return true (file exists)
    (fs.existsSync as jest.Mock).mockReturnValue(true);

    ensureFileExists(filePath);

    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });
});
