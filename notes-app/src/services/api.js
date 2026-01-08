const BASE_URL = "http://localhost:5000/api/notes"

export async function getNotes() {
  const res = await fetch(BASE_URL)
  return res.json()
}

export async function createNote(data) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  return res.json()
}

export async function updateNote(id, data) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  return res.json()
}

export async function deleteNote(id) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  })
}
