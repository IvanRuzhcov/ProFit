const { Admin } = require('../db/models');

module.exports = async function getUser(req, res, next) {
  // если пользователь залогинен, то в хранилище сессии лежит его userId
  const { adminId } = req.session;
  const admin = adminId && (await Admin.findByPk(adminId));
  res.locals.admin = admin;

  next();
};
