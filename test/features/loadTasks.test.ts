import fs from "fs";
import { Task } from "../../src/models/task.model";
import { randomUUID } from "crypto";
import { TaskStatus } from "../../src/enums/TaskStatus";
import { loadTasks } from "../../src/features/loadTasks";

jest.mock("fs");

describe("Load Tasks", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return list of all tasks", () => {
    const existingTasks: Task[] = [
      {
        id: randomUUID(),
        description: "First Task",
        status: TaskStatus.TODO,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toLocaleString(),
      },
      {
        id: randomUUID(),
        description: "Second Task",
        status: TaskStatus.TODO,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toLocaleString(),
      },
    ];

    (fs.existsSync as jest.Mock).mockReturnValue(true);
    (fs.readFileSync as jest.Mock).mockReturnValue(
      JSON.stringify(existingTasks)
    );

    const result = loadTasks();

    expect(fs.readFileSync).toHaveBeenCalledTimes(1);
    expect(fs.readFileSync).toHaveReturnedWith(JSON.stringify(existingTasks));

    expect(result).toHaveLength(2);

    expect(result[0].id).toMatch(existingTasks[0].id);
    expect(result[0].status).toMatch(existingTasks[0].status);
    expect(result[0].description).toMatch(existingTasks[0].description);
    expect(result[0].createdAt).toMatch(existingTasks[0].createdAt);
    expect(result[0].updatedAt).toMatch(existingTasks[0].updatedAt);

    expect(result[1].id).toMatch(existingTasks[1].id);
    expect(result[1].description).toMatch(existingTasks[1].description);
    expect(result[1].createdAt).toMatch(existingTasks[1].createdAt);
    expect(result[1].updatedAt).toMatch(existingTasks[1].updatedAt);
    expect(result[1].status).toMatch(existingTasks[1].status);
  });

  it("should return empty list when no tasks exist", () => {
    (fs.existsSync as jest.Mock).mockReturnValue(true);
    (fs.readFileSync as jest.Mock).mockReturnValue("[]");

    const result = loadTasks();

    expect(result).toHaveLength(0);

    expect(fs.readFileSync).toHaveBeenCalledTimes(1);
    expect(fs.readFileSync).toHaveReturnedWith("[]");
  });
});
