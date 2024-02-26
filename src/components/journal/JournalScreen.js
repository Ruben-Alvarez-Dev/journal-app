/* import { NothingSelected } from "./NothingSelected"; */

import { NotesAppBar } from "../notes/NotesAppBar";
import { Sidebar } from "./Sidebar";
export const JournalScreen = () => {
    return (
      <div className="journal__main-content">
          
          <Sidebar />
          <main>
                {/* <NothingSelected /> */}
                <NotesAppBar />
                {/* <NoteScreen /> */}
          </main>
          
      </div>
  );
  }
  