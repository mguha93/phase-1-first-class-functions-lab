const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);

const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = num => fare => fare * num

const fareDoubler = fare => {
    let num = 2
    return createFareMultiplier(num)(fare)
}

const fareTripler = fare => {
    let num = 3
    return createFareMultiplier(num)(fare)
}

const selectDifferentDrivers = (drivers, fn) => fn(drivers)