import { createContext } from "react";
//For using Context API we have to use this createContext() function
const noteContext = createContext();//here we created a new context using createContext()function
export default noteContext;//exporting the context so that it can be used by the NoteState component