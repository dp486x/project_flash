module.exports = function(app, router){
  var trailerController = require('../controllers/trailer.controller.js');
  var jobsController = require('../controllers/jobs.controller.js');


  app.route('/trailers')
  .get(trailerController.list)
  .post(trailerController.create);

  app.param('trailerID', trailerController.trailerMiddleware)

  app.route('/trailers/:trailerID')
  .get(trailerController.read)
  .put(trailerController.update);

  app.route('/jobs')
  .get(jobsController.list)
  .post(jobsController.create);

  app.param('jobID', jobsController.jobsMiddleware)

  app.route('/jobs/:jobID')
  .get(jobsController.read)
  .put(jobsController.update)
  .delete(jobsController.delete);

}
