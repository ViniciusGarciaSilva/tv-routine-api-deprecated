const routineService = require('../services/routine.service')

exports.routine = async function (req, res, next) {
  console.log
  routineService.checkRoutine(req.body.date)
  res.status(200).send({
    data: "Olá"
  })
}
