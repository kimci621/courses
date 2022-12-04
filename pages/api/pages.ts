import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const getPages = async () => {
  const currentFilePath = path.dirname(import.meta.url.split("///")[1]);
  try {
    return new Promise((res, rej) => {
      fs.readFile(
        path.join(currentFilePath, "../..", "database", "pages.json"),
        "utf-8",
        (err, content) => {
          if (err) {
            rej(err);
          } else {
            res(JSON.parse(content));
          }
        }
      );
    });
  } catch (err) {
    console.log("failed to load pages, ", err.message);
    return "failed to load pages";
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({ message: await getPages() });
  } catch (err) {
    res.status(500).json({ error: "failed to load pages" });
  }
}
