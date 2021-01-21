const apiController = require('../../controllers/apiController');

module.exports = (router) => {
  router.get("/test", apiController.test);

  return router;
};
