"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Data1_1 = require("./Data1");
//Map
function findServerNames(data) {
    var serverNames = data.map(function (item) {
        return item.name;
    });
    return serverNames;
}
//Filter
function filterActiveServers(data) {
    var activeServers = data.filter(function (item) { return item.is_live == true; });
    return activeServers;
}
// Reduce
function totalSpaceAvaliable(data) {
    var sumofSpaceAvailable = data.reduce(function (acc, curr) {
        return curr.space_available + acc;
    }, 0);
    return sumofSpaceAvailable;
}
function findCityCount(data) {
    var cityCountObj = data.reduce(function (acc, curr) {
        var city = curr.city;
        if (!(city in acc)) {
            acc[city] = 1;
        }
        else {
            acc[city] = acc[city] + 1;
        }
        return acc;
    }, {});
    return cityCountObj;
}
//ForEach
function alterWareHouseStatusbyCity(data, status, city) {
    data.forEach(function (element) {
        if (element.city.toLowerCase().trim() == city.toLowerCase().trim()) {
            element.is_live = status;
        }
    });
}
//executing code
var filteredCity = "Delhi";
console.log("List of names from server", findServerNames(Data1_1.wareHouseData));
console.log("\n Find Active Servers /n", filterActiveServers(Data1_1.wareHouseData));
console.log("\n Total Space Available", totalSpaceAvaliable(Data1_1.wareHouseData));
alterWareHouseStatusbyCity(Data1_1.wareHouseData, true, filteredCity);
console.log("Data after Alteration \n", Data1_1.wareHouseData);
console.log("\n City count Obj", findCityCount(Data1_1.wareHouseData));
