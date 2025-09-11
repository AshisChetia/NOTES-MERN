import Note from '../models/Note.js';



export const getAllNotes = async (_, res) => {
  try {
   const notes = await Note.find().sort({createdAt:-1}) // newest one
   res.status(200).json(notes)
  } catch (error) {
   console.error("Error in getAllNotes Controller")
   res.status(500).json({message: "This is an internal server error", error})
  }
};

export const getNoteById = async (req, res) => {
   try {
      const note = await Note.findById(req.params.id)
      if(!note) return res.status(404).json({message: 'Note not found'})
      res.status(200).json(note)
   } catch (error) {
      console.error("Error in getNoteById Controller",error);
      res.status(500).json({message: "This is an internal server error", error})
   }
}

export const createNote = async (req, res) => {
   try {
      const {title, content} = req.body 
      const note = new Note({title, content})

      const savedNote = await note.save()
      res.status(201).json(savedNote)
   } catch (error) {
      console.error("Error in createNote Controller",error);
      res.status(500).json({message: "This is an internal server error", error})
   }
};

export const updateNote = async (req, res) => {
   try {
      const {title,content} = req.body;
      const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},
         {new:true,}
      )
      
      if(!updatedNote) return res.status(404).json({message: "Note not found"})
   
      res.status(200).json({ updatedNote });
   } catch (error) {
       console.error("Error in updateNote Controller",error);
       res.status(500).json({message: "This is an internal server error", error})
   }
}  
export const deleteNote = async (req, res) => {
   try {
      const { title, content } = req.body;
      await Note.findByIdAndDelete(req.params.id, { title, content });
      res.status(201).json({ message: "Note Deleted" });
   } catch (error) {
      console.error("Error in deleteNote Controller",error);
       res.status(500).json({message: "This is an internal server error", error})
   }
};