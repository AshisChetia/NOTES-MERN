export const getAllNotes = (req, res) => {
  res.status(200).send("YOU JUST FETCHED THE NOTES");
};

export const createNote = (req, res) => {
   res.status(201).json({ message: "NOTES CREATED SUCCESSFULLY" });
};

export const updateNote = (req, res) => {
   res.status(200).json({ message: "NOTES UPDATED SUCCESSFULLY" });
};

export const deleteNote = (req, res) => {
   res.status(200).json({ message: "NOTES DELETED SUCCESSFULLY" });
 };