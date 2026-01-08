import NoteForm from "../components/NoteForm";

export default function Create() {
  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold text-white mb-6">Create Note</h2>
      <NoteForm />
    </div>
  );
}
