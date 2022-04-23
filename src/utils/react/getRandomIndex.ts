import { nanoid } from "nanoid";
import { assoc } from "../js/assoc";

export const randomID = () => nanoid();
export const generateId = <O extends object>(obj: O) => assoc('id', randomID())(obj)