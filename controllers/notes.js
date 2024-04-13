const Note = require("../models/note-model");
class NotesController {
	async getList(_, res) {
		const noteData = await Note.findAll()
		const notes = noteData.map((note) => note.dataValues)
		return notes
	}

	async create(req, res) {
		try {
			const { text } = req.body;

			if (!text || !text.length) {
				throw new Error('You can not create note with empty text');
			}

			const noteData = await Note.create({
				text: text
			})
			res.json(noteData.dataValues);
		} catch (e) {
			res.status(400).json(e.message);
		}
	}
}

module.exports = new NotesController();
