// nodejs read file content

import { existsSync, readFileSync } from "fs";
import { join } from "path";

export default async function getFileContent(
  fullPath: string
): Promise<string> {
  try {
    const data = await readFileSync(fullPath, "utf8");
    return data;
  } catch (err) {
    console.error(err);
  }
  return "";
}
