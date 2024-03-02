import { useSelector } from "react-redux"
import { NotesAppBar } from "./NotesAppBar"
import { useForm } from "../../hooks/useForm"

export const NoteScreen = () => {
  
  const { active:note } = useSelector ( state => state.notes );

  const [ formValues, handleInputChange ] = useForm( note );

  console.log(formValues);
  const { body, title } = formValues;

  return (
    <div className="notes__main-content">
        
        <NotesAppBar />
  
        <div className="notes__content">
          
          <input
              type="text"
              placeholder="Some awesome title" 
              className="notes__title-input"
              autoComplete="off"
              value= { body }
              onChange={ handleInputChange }
          />

          <textarea
              placeholder="What happened today"
              className="notes__textarea"
              value= { title }
              onChange={ handleInputChange }
          ></textarea>

          {
            (note.url) &&
            <div className="notes__image">
              <img
                src="https://cdn.pixabay.com/photo/2023/11/14/11/07/sparrow-8387465_1280.jpg"
                alt="imagen"
              ></img>
            </div>
          }    

        </div>
    </div>
  )
}
