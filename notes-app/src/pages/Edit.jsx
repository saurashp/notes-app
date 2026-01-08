import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import { getNotes } from "../services/api";

export default function Edit() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    getNotes().then((notes) => setNote(notes.find((n) => n._id === id)));
  }, [id]);

  if (!note) return null;

  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold text-white mb-6">Edit Note</h2>
      <NoteForm note={note} id={id} />
    </div>
  );
}
