import express, { Router, Request, Response } from "express";
const router: Router = express.Router();
import fs from "fs";
import { imgPath } from "../utils/handle-file";
router.get("/pic", async (req: Request, res: Response) => {
  res.setHeader("Content-Type", " image/jpeg");
  const path = imgPath();
  const stream = fs.createReadStream(path);

  let streamData: Array<Buffer> = [];
  if (stream) {
    stream.on("data", (chunk: Buffer) => {
      streamData.push(chunk);
    });
    stream.on("end", () => {
      const finalData: Buffer = Buffer.concat(streamData);
      res.write(finalData);
      res.end();
    });
  }
});

export default router;
