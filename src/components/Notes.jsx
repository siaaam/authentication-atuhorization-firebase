import React, { useContext } from 'react';
import { NotesContext } from '../context/Notes.context';
import { Container, Grid } from '@mui/material';
import Note from './Note';

const Notes = () => {
  const { notes } = useContext(NotesContext);
  console.log(notes);
  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        {notes &&
          notes.map((note) => {
            return (
              <Grid item sm={4} key={note.id}>
                <Note note={note} />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default Notes;
