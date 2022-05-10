import { createContext } from "react";



interface ICommentContext {
  value: string;
  onChange: (i: string) => void;
}

export const commentContext = createContext<ICommentContext>({onChange: () => {}, value: ''});


