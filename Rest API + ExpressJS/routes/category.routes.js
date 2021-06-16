const controller = require("../controllers/category.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  }); 
  app.get("/category", controller.getAll);
  app.post("/category", controller.add);
  app.put("/category", controller.update);
  app.delete("/category/:id", controller.delete);
};