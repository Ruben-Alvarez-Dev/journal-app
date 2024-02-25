import {createRoot} from "react-dom/client";
import {JournalApp} from "./JournalApp"
import "./index.css";

const root = createRoot(document.querySelector("#root"));
root.render(<JournalApp />);