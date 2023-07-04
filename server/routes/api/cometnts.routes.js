const comentRouter = require('express').Router();
const { Comment } = require('../../db/models');

comentRouter.post('/comments', async (req, res) => {
  // eslint-disable-next-line camelcase
  const { comments, files_id } = req.body;
  const { userId } = req.session;
  try {
    // eslint-disable-next-line no-unused-vars
    if (comments.length > 0) {
      const result = await Comment.create({
        user_id: userId,
        comments,
        // eslint-disable-next-line camelcase
        files_id,
      });
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

comentRouter.get('/init/comments', async (req, res) => {
  try {
    const initComment = await Comment.findAll();
    res.status(200).json(initComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = comentRouter;
