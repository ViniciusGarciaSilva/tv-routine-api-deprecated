const db = require('./db.service')

function checkRoutine (date) {
  let channels = [];
  let newDate
  console.log(date)
  for ( let i=1; i<=5; i++) {
    newDate = new Date(date)
    newDate.setDate(newDate.getDate() - 7*i)
    newDate.setMinutes(newDate.getMinutes() - 5)
    for ( let j=0; j<=10; j++) {
      channels.push(db.get(newDate))
      newDate.setMinutes(newDate.getMinutes() + 1)
    }
  }
}
exports.checkRoutine = checkRoutine