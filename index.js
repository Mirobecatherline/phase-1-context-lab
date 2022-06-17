/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 let createEmployeeRecord=function(array1) {
    return {firstName:array1[0],
        familyName:array1[1],
        title:array1[2],
        payPerHour:array1[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}
let createEmployeeRecords = function(employee) {
    return employee.map(function(array1){
        return createEmployeeRecord(array1)
    })
}
let createTimeInEvent=function(date1) {
    let[date,hour]=date1.split(' ')
    this.timeInEvents.push({
        type:"TimeIn",
        hour:parseInt(hour),
        date:date
    })
    return this
}
let createTimeOutEvent=function (date1) {
    let[date,hour]=date1.split(' ')
    this.timeOutEvents.push({
        type:"TimeOut",
        hour:parseInt(hour),
        date:date
    })
    return this
}

let hoursWorkedOnDate=function(date2) {
    let eventin = this.timeInEvents.find(function(event){
        return event.date === date2
    })

    let eventout = this.timeOutEvents.find(function(event){
        return event.date === date2
    })

    return (eventout.hour - eventin.hour) / 100
}
function wagesEarnedOnDate(date3) {
        let wage = hoursWorkedOnDate(this,date3)
            * this.payPerHour
    return parseFloat(wage.toString())
}

let findEmployeeByFirstName = function(array3, firstName) {
    return array3.find(function(record){
      return record.firstName === firstName
    })
  }

function calculatePayroll(record1) {
    return record1.reduce(function(mm, record){
        return mm + allWagesFor(record)
    }, 0)
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

