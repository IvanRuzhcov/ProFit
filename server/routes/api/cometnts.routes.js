const comentRouter = require('express').Router();
const { Comment, User } = require('../../db/models');

comentRouter.post('/comments', async (req, res) => {
  // eslint-disable-next-line camelcase
  const { comments, files_id } = req.body;
  const { userId } = req.session;
  try {
    if (comments.length > 0) {
      const result = await Comment.create({
        user_id: userId,
        comments,
        // eslint-disable-next-line camelcase
        files_id,
      });
      const resultUser = await Comment.findOne({
        where: { id: result.id },
        include: [{ model: User }],
      });
      res.status(200).json(resultUser);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
comentRouter.get('/init/comments', async (req, res) => {
  try {
    const initComment = await Comment.findAll({ include: [{ model: User }] });
    res.status(200).json(initComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = comentRouter;
