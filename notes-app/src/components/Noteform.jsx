import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNote, updateNote } from "../services/api";

export default function NoteForm({ note, id }) {
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (note) {
      await updateNote(id, { title, content });
    } else {
      await createNote({ title, content });
    }

    navigate("/");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-4"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none focus:border-blue-500"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="5"
        placeholder="Content"
        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none focus:border-blue-500 resize-none"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded-lg font-medium"
      >
        Save Note
      </button>
    </form>
  );
}
