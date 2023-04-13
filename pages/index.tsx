import React, { useState } from "react";
import { Container } from "@mui/material";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

interface Note {
  id: number;
  title: string;
  content: string;
}

const HomePage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteIdCounter, setNoteIdCounter] = useState(0);
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);

  const handleSubmit = () => {
    if (editingNoteId !== null) {
      // Update an existing note
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === editingNoteId ? { ...note, title, content } : note
        )
      );
      setEditingNoteId(null);
    } else {
      // Create a new note
      const newNote: Note = {
        id: noteIdCounter,
        title,
        content,
      };
      setNotes((prevNotes) => [...prevNotes, newNote]);
      setNoteIdCounter((prevId) => prevId + 1);
    }
    setTitle("");
    setContent("");
  };

  const handleEditClick = (note: Note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingNoteId(note.id);
  };

  return (
    <Container maxWidth="sm">
      <NoteForm
        title={title}
        content={content}
        editing={editingNoteId !== null}
        onTitleChange={setTitle}
        onContentChange={setContent}
        onSubmit={handleSubmit}
      />
      <NoteList notes={notes} onEditNote={handleEditClick} />
    </Container>
  );
};

export default HomePage;
