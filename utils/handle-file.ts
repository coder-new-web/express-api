import fs from "fs";
import { getRandomInt } from "./function";
let imgList: Array<string> = [];

fs.readdir("./public", (err, file: Array<string>) => {
  if (err) {
    console.log(err);
  }
  imgList = [...file];
});

export const imgPath = (): string => {
  return "./public/" + imgList[getRandomInt(imgList.length)];
};
