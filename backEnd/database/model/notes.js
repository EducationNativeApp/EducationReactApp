const conn = require("../index")

function getAllNotes(req, res) {
    const query = 'SELECT * FROM notes';
  
   conn.query(query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  }

  function createNote(req, res) {
    const { subject, note } = req.body;
    const query = `INSERT INTO notes (subject, note) VALUES ('${subject}', '${note}')`;
  
   conn.query(query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send('Note created successfully');
      }
    });
  }
  function getNotesBySubject(req, res) {
    const { subject } = req.params;
    const query = `SELECT * FROM notes WHERE subject = '${subject}'`;
  
    connection.query(query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  }
  


  function updateNote(req, res) {
    const { note_id, note } = req.body;
    const query = `UPDATE notes SET note = '${note}' WHERE note_id = ${note_id}`;
  
   conn.query(query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send('Note updated successfully');
      }
    });
  }
  function deleteNote(req, res) {
    const { note_id } = req.params; 
    const query = `DELETE FROM notes WHERE note_id = ${note_id}`;
  
   conn.query(query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send('Note deleted successfully');
      }
    });
  }
  
  module.exports={
    deleteNote,
    updateNote,
    createNote,
    getAllNotes,
getNotesBySubject
  }
  
  
  

  
