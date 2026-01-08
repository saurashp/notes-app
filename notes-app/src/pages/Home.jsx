import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { getNotes } from "../services/api";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNotes().then((data) => {
      setNotes(data);
      setLoading(false);
    });
  }, []);

  function handleDelete(id) {
    setNotes((prev) => prev.filter((note) => note._id !== id));
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh] text-slate-400">
        Loading notes...
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold mb-8 text-white">Your Notes</h2>

      {notes.length === 0 ? (
        <div className="text-slate-400 text-center mt-20">
          No notes yet. Create your first note.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              onDelete={() => handleDelete(note._id)}
            />
          ))}
        </div>
      )}
    </main>
  );
}
