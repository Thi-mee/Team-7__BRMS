import { useLoaderData } from "react-router-dom";
import style from "../styles/note.module.css";
export const getNotes = () => {
  const noteP = new Promise((resolve, reject) => {
    setTimeout(() => {
      const notes = [
        { id: 1, title: "Note 1", content: "Content 1" },
        { id: 2, title: "Note 2", content: "Content 2" },
        { id: 3, title: "Note 3", content: "Content 3" },
      ];
      resolve(notes);
    }, 3000);
  });
  return noteP;
};

const NotesPage = () => {
  const { notes } = useLoaderData();
    console.log(notes);
  return (
    <div className={style.notepage}>
      <h1>Notes Page</h1>
      {/* Notes List Goes here*/}
      <div className={style.notes}>
        {/*// {notes.map((note) => (
        //   <div className={style.note} key={note.id}>
        //     <div className={style.status}></div>
        //     <div className={style.content}>
        //       <h3>{note.title}</h3>
        //       <p>{note.content}</p>
        //     </div>
        //     <button className={style.moreBtn}>
        //       <span className="material-symbols-outlined">more_horiz</span>
        //     </button>
        //   </div>
  // ))}*/}


      </div>
      <div className={style.ctab}>
        <span className="material-symbols-outlined">add</span>
      </div>
    </div>
  );
};

export default NotesPage;


// <div className={style.note}>
//   <div className={style.status}></div>
//   <div className={style.content}>
//     <h3>Note 1</h3>
//     <p>Content 1</p>
//   </div>
//   <button className={style.moreBtn}>
//     <span className="material-symbols-outlined">more_horiz</span>
//   </button>
// </div>