/* import { NothingSelected } from "./NothingSelected"; */

import { NotesAppBar } from "../notes/NotesAppBar";
import { NoteScreen } from "../notes/NoteScreen";
import { Sidebar } from "./Sidebar";
export const JournalScreen = () => {
    return (
      <div className="journal__main-content">
          
          <Sidebar />
          <main>
                {/* <NothingSelected /> */}
                <NoteScreen />
          </main>
          
      </div>
  );
  }
  