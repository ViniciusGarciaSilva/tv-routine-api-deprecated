const routineService = require('../services/routine.service')

exports.routine = async function (req, res, next) {
  let result = routineService.checkRoutine(req.body.date)
  res.status(200).send({
    data: result
  })
}
