const toys =[
    {
        id:1,
        type: "bike",
        price: 100,
        quantity: 12,
    },
    {
        id:2,
        type: "teddy",
        price: 10,
        quantity: 5,
    },
    {
        id: 3,
        type: "yoyo",
         price: 5,
        quantity: 50,
    },
]

const skates = {
    id: 4,
    type: "skates",
    price: 5,
    quantity: 50,
}

const clue = {
    id: 5,
    type: "clue",
    price: 69,
    quantity: 420,
}

toys.push(skates);
toys.push(clue);

// for (const toy of toys) {
//     console.log(`the type is ${toy.type}. The price is $${toy.price}. The quantity is ${toy.quantity}.`)
// };

// for (const toy of toys) {
//     toy.price = toy.price+ toy.price * .05
//     console.log(`the type is ${toy.type}. The price is $${toy.price}. The quantity is ${toy.quantity}.`)
// };

// for (const toy of toys) {
//     if (toy.id===3)
//     console.log(`the type is ${toy.type}. The price is $${toy.price}. The quantity is ${toy.quantity}.`)
// };



const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId+1

    toyObject.id = idForNewToy
    toys.push(toyObject)
};

const monopoly = {
    type: "clue",
    price: 69,
    quantity: 420,
};

addToyToInventory(monopoly);

for (const toy of toys) {
    console.log(`The ${toy.type} costs ${toy.price} dollars. We have ${toy.quantity} in stock.`)
};

console.log(toys);