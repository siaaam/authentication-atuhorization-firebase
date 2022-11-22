import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { updateDoc, doc, getDoc } from 'firebase/firestore';

import { useNavigate, useParams } from 'react-router-dom';
import { notesColRef } from '../utils/firebase.config';
import { AuthContext } from '../context/Auth.context';

const EditNote = () => {
  const [note, setNote] = React.useState({
    title: '',
    description: '',
  });

  const { noteID } = useParams();

  console.log(noteID);

  React.useEffect(() => {
    (async () => {
      const docRef = doc(notesColRef, noteID);
      const currentDoc = await getDoc(docRef);
      if (currentDoc.exists) {
        const data = currentDoc.data();
        console.log('Document Exits', data);
        setNote({
          ...data,
        });
      }
    })();
  }, [noteID]);

  const navigate = useNavigate();

  const { currentUser } = React.useContext(AuthContext);

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = doc(notesColRef, noteID);
    if (note.user.id === currentUser.uid) {
      await updateDoc(docRef, {
        ...note,
      });
      console.log('Note updated successfully');
      navigate('/notes');
    } else {
      console.log('Not have enough permission to update the note');
      navigate('/notes');
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography
        variant="h5"
        component="h1"
        textAlign="center"
        sx={{ mt: 2, color: 'text.secondary' }}
      >
        Update Note
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          name="title"
          label="Title"
          variant="filled"
          onChange={handleChange}
          value={note.title}
          fullWidth
          required
        />

        <TextField
          multiline
          required
          value={note.description}
          name="description"
          fullWidth
          variant="filled"
          label="Description"
          onChange={handleChange}
          rows="5"
        />
        <Button color="primary" variant="contained" type="submit">
          Update Note
        </Button>
      </Box>
    </Container>
  );
};

export default EditNote;
