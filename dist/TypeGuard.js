"use strict";
// 1. when working with TYPE
function printEmployeeInfo(emp) {
    console.log('Name: ' + emp.name);
    // we can not use `typeof emp === 'Admin2'` check here
    // because this check is performed at runtime
    // the js does not know the Admin2 type
    // so, use following check. This checks if emp has property call `privileges`
    if ('privileges' in emp) {
        console.log('Previleges: ' + emp.privileges);
    }
}
const e6 = {
    name: 'Jeffrey',
    privileges: ['create-user']
};
printEmployeeInfo(e6);
// 2. when working with CLASS
class Car {
    drive() {
        console.log('driving car...');
    }
}
class Truck {
    drive() {
        console.log('driving truck...');
    }
    loadCargo() {
        console.log('loading...');
    }
}
function useVehicle(vehicle) {
    vehicle.drive();
    // we can use `loadCargo in vehicle` check like with type
    // however, since we are dealing with class here
    // we can use `instanceof` check here
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}
useVehicle(new Truck());
