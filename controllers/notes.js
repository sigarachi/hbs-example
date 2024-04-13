const notes = [{ id: 1, text: 'Hello world' }];

class NotesController {
	async getList(_, res) {
		return notes;
	}

	async create(req, res) {
		try {
			const { text } = req.body;

			if (!text || !text.length) {
				throw new Error('You can not create note with empty text');
			}

			const note = {
				id: notes.length + 1,
				text,
			};

			notes.push(note);
			res.json(note);
		} catch (e) {
			res.status(400).json(e.message);
		}
	}
}

module.exports = new NotesController();
