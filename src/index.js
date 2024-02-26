import {createRoot} from "react-dom/client";
import {JournalApp} from "./JournalApp"

const root = createRoot(document.querySelector("#root"));
root.render(<JournalApp />); 