import { wareHouseData } from "./Data1";
import { WareHouse } from "./Data1";

//Map

function findServerNames(data: WareHouse[]): string[]{
    const serverNames: string[] = data.map((item : WareHouse)=>{
        return item.name;
    })
    return serverNames;
}


//Filter

function filterActiveServers(data: WareHouse[]) : WareHouse[]{
    const activeServers: WareHouse[] = data.filter((item: WareHouse) => item.is_live == true);
    return activeServers;
}



// Reduce

function totalSpaceAvaliable(data: WareHouse[]) : number{
    const sumofSpaceAvailable = data.reduce((acc: number, curr: WareHouse) => {
      return curr.space_available + acc;
    }, 0);
    return sumofSpaceAvailable;
}
  
  function findCityCount(data: WareHouse[]) : object{
    const cityCountObj: any = data.reduce((acc: object, curr) => {
      const city: string = curr.city;
      if (!(city in acc)) {
        acc[city] = 1;
      } else {
        acc[city] = acc[city] + 1;
      }
      return acc;
    }, {});
    return cityCountObj;
  }

  //ForEach


function alterWareHouseStatusbyCity(data: WareHouse[], status: boolean, city: string): void {
    data.forEach((element: WareHouse) => {
      if (element.city.toLowerCase().trim() == city.toLowerCase().trim()) {
        element.is_live = status;
      }
    });
  }
  //executing code
  const filteredCity = "Delhi";
  console.log("List of names from server", findServerNames(wareHouseData));
  console.log("\n Find Active Servers /n", filterActiveServers(wareHouseData));
  console.log("\n Total Space Available", totalSpaceAvaliable(wareHouseData));
  alterWareHouseStatusbyCity(wareHouseData, true, filteredCity);
  console.log("Data after Alteration \n", wareHouseData);
  console.log("\n City count Obj", findCityCount(wareHouseData));
  
  
