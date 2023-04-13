import React from "react";
import NoteCard from "./NoteCard";

interface Note {
  id: number;
  title: string;
  content: string;
}

interface NoteListProps {
  notes: Note[];
  onEditNote: (note: Note) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onEditNote }) => {
  return (
    <>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          title={note.title}
          content={note.content}
          onEdit={() => onEditNote(note)}
        />
      ))}
    </>
  );
};

export default NoteList;
