const papa = require('papaparse')

exports.routine = async function (req, res, next) {
  res.status(200).send({
    data: "Olá"
  })
}
