// Code your solution here


function findMatching(listOfDrivers, driver) {
    const output = listOfDrivers.filter(driverName => driverName.toLowerCase() === driver.toLowerCase())
    return output;
}

function fuzzyMatch(listOfDrivers, driver) {
    const newList = listOfDrivers.filter(driverName => {
       return driverName.startsWith(driver);
    })
    return newList;
}

function matchName(listOfDrivers, driver) {
    const output = listOfDrivers.filter(driverName => {
        return driverName.name === driver;
    })
    return output;
}