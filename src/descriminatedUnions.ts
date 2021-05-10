// discriminated unions
// this means that there is a common property in every objects that describe the object(`type` in this case)
interface Bird {
    type: 'bird';
    flyingSpeed: number
}

interface Horse {
    type: 'horse';
    runningSpeed: number
}

// It also works for type
// again, a lot of time, type and interface can be used interchangeblly in TS
// type Bird = {
//     type: 'bird';
//     flyingSpeed: number
// }

// type Horse = {
//     type: 'horse';
//     runningSpeed: number
// }

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break
        case 'horse':
            speed = animal.runningSpeed
    }

    console.log('Moving at speed: ' + speed)
}

moveAnimal({ type: 'horse', runningSpeed: 111 })