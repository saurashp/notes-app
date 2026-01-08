import express from "express"
import Note from "../models/Note.js"

const router = express.Router()

router.get("/", async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 })
  res.json(notes)
})

router.post("/", async (req, res) => {
  const note = await Note.create(req.body)
  res.json(note)
})

router.put("/:id", async (req, res) => {
  const updated = await Note.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(updated)
})

router.delete("/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  res.json({ success: true })
})

export default router
