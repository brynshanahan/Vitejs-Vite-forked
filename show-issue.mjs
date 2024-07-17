import { execSync } from "child_process";
import copyDir from "copy-dir";
import { rmSync, unlinkSync } from "fs";

function rmDirOrFile(path) {
  try {
    rmSync(path, { recursive: true });
    return;
  } catch (error) {
    console.error(error);
  }

  unlinkSync(path);
}

async function showIssue() {
  execSync(`yarn install`, { stdio: "inherit" });

  rmDirOrFile("./node_modules/common", { recursive: true });
  execSync(`yarn install`, { stdio: "inherit" });

  execSync(`yarn workspace app vitest --run --no-cache`, {
    stdio: "inherit",
  });

  rmDirOrFile("./node_modules/common", { recursive: true });

  await copyDir.sync("./packages/common", "./node_modules/common");

  execSync(`yarn workspace app vitest --run --no-cache`, {
    stdio: "inherit",
  });
}

showIssue();
