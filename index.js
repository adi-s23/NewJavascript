import { data } from "./data.js";

//Map

function findServerNamesfromData(data) {
  const serverNames = data.map((item) => {
    return item.name;
  });
  return serverNames;
}

//Filter

function filterActiveServers(data) {
  const activeServers = data.filter((item) => item.is_live == true);
  return activeServers;
}

// Reduce

function totalSpaceAvaliable(data) {
  const sumofSpaceAvailable = data.reduce((acc, curr) => {
    return curr.space_available + acc;
  }, 0);
  return sumofSpaceAvailable;
}

function findCityCount(data) {
  const cityCountObj = data.reduce((acc, curr) => {
    const city = curr.city;
    if (!(city in acc)) {
      acc[city] = 1;
    } else {
      acc[city] = acc[city] + 1;
    }
    return acc;
  }, {});
  return cityCountObj;
}

//forEach

function alterWareHouseStatusbyCity(data, status, city) {
  data.forEach((element) => {
    if (element.city.toLowerCase().trim() == city.toLowerCase().trim()) {
      element.is_live = status;
    }
  });
}
//executing code
const filteredCity = "Delhi";
console.log("List of names from server", findServerNamesfromData(data));
console.log("\n Find Active Servers /n", filterActiveServers(data));
console.log("\n Total Space Available", totalSpaceAvaliable(data));
alterWareHouseStatusbyCity(data, true, filteredCity);
console.log("Data after Alteration \n", data);
console.log("\n City count Obj", findCityCount(data));
