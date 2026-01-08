import { useNavigate } from "react-router-dom";
import { deleteNote } from "../services/api";

export default function NoteCard({ note, onDelete }) {
  const navigate = useNavigate();

  async function handleDelete() {
    await deleteNote(note._id);
    onDelete();
  }

  return (
    <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-blue-500 transition">
      <h3 className="text-lg font-semibold text-white mb-2">{note.title}</h3>

      <p className="text-slate-300 text-sm line-clamp-3 mb-4">{note.content}</p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-400">
          {new Date(note.createdAt).toLocaleString()}
        </span>

        <div className="flex gap-4">
          <button
            onClick={() => navigate(`/edit/${note._id}`)}
            className="text-sm text-blue-400 hover:underline"
          >
            Edit
          </button>

          <button
            onClick={handleDelete}
            className="text-sm text-red-400 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
