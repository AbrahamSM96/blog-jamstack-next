import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export const getFiles = () => {
    //read sync files
    fs.readdirSync(path.join(root, "data"));
};
// slug is the file name
export const getFileBySlug = ({ slug }) => {};

export const getAllFilesMetadata = () => {};
