const express = require('express');
const { File } = require('../../db/models');

const router = express.Router();
const fileuploadMiddeleware = require('../../middlewares/fileuploadMiddeleware');

router.post('/file', async (req, res) => {
  try {
    const { url } = req.files;
    const { type, description } = req.body;
    const newUrl = await fileuploadMiddeleware(url);
    const file = await File.create({
      type,
      description,
      url: newUrl,
      user_id_files: req.session.userId,
    });
    res.status(201).json({
      id: file.id,
      type: file.type,
      url: file.url,
      user_id_files: file.user_id_files,
      description: file.description,
      sport: file.sport,
      file: file.file,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    res.status(500).json(console.log(error.message));
  }
});

router.post('/url', async (req, res) => {
  try {
    const { type, url, description } = req.body;
    const file = await File.create({
      type,
      description,
      url,
      user_id_files: req.session.userId,
    });
    res.status(201).json(file);
  } catch (error) {
    // eslint-disable-next-line no-console
    res.status(500).json(console.log(error.message));
  }
});

module.exports = router;
