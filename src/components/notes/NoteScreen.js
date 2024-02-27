import { NotesAppBar } from "./NotesAppBar"

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
        
        <NotesAppBar />
  
        <div className="notes__content">
          <input
              type="text"
              placeholder="Some awesome title"
              className="notes__title-input"
              autoComplete="off"
          />
          <textarea
              placeholder="What happened today"
              className="notes__textarea"
          ></textarea>
          <div className="notes__image">
            <img
              src="https://cdn.pixabay.com/photo/2023/11/14/11/07/sparrow-8387465_1280.jpg"
              alt="imagen"
            ></img>
          </div>    
        </div>
    </div>
  )
}
