/* Your Code Here */
const createEmployeeRecord = function (person) {
  return {
    firstName: person[0],
    familyName: person[1],
    title: person[2],
    payPerHour: person[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
};

const createEmployeeRecords = function (employeeData) {
  return employeeData.map(createEmployeeRecord);
};

const createTimeInEvent = function (dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  const timeAsInt = parseInt(hour);
  this.timeInEvents.push({
    type: "TimeIn",
    hour: timeAsInt,
    date,
  });
  return this;
};

const createTimeOutEvent = function (dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  const timeAsInt = parseInt(hour);
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: timeAsInt,
    date,
  });
  return this;
};

const hoursWorkedOnDate = function (designatedDate) {
  const punchIn = this.timeInEvents.find((dateIn) => {
    return dateIn.date === designatedDate;
  });
  const punchOut = this.timeOutEvents.find((dateOut) => {
    return dateOut.date === designatedDate;
  });
  const hoursWorked = (punchOut.hour - punchIn.hour) * 0.01;
  return hoursWorked;
};

const wagesEarnedOnDate = function (designatedDate) {
  const payRate =
    this.payPerHour * hoursWorkedOnDate.call(this, designatedDate);
  return payRate;
};

const findEmployeeByFirstName = function (srcArray, firstName) {
  return srcArray.find((result) => {
    return result.firstName === firstName;
  });
};

const calculatePayroll = function (employeeRecords) {
  return employeeRecords.reduce(function (element, record) {
    return element + allWagesFor.call(record);
  }, 0);
};

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
