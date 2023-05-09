var Order = {
    place: 'StarBucks Menue:',
    name: 'coffee:',
    coffeeType: {
        a: 'Latte',
        b: 'Americano',
        c: 'Cappuccino',
        d: 'Mokiato',
        e: 'Espresso',
    },
    name2: 'tea:',
    teaType: {
        a: 'Black Tea',
        b: 'Green Tea',
        c: 'White Tea',
        d: 'Dolong Tea',
        e: 'Herbal Tea',
    }
}
console.log(Order)
console.log(Order.place)
console.log(Order.name)
console.log(Order.coffeeType.a)
console.log(Order.coffeeType.b)
console.log(Order.coffeeType.c)
console.log(Order.coffeeType.d)
console.log(Order.coffeeType.e)
console.log(Order.name2)
console.log(Order.teaType.a)
console.log(Order.teaType.b)
console.log(Order.teaType.c)
console.log(Order.teaType.d)
console.log(Order.teaType.e)
var OrderIn = prompt('Enter your order')
if (OrderIn === 'Latte') {
    console.log('Your Coffee order was successfully done! Please, wait for your order ready.')
} else if (OrderIn === 'Cappuccino') {
    console.log('Your Coffee order was successfully done! Please, wait for your order ready.')
} else if (OrderIn === 'Americano') {
    console.log('Your Coffee order was successfully done! Please, wait for your order ready.')
} else if (OrderIn === 'Mokiato') {
    console.log('Your Coffee order was successfully done! Please, wait for your order ready.')
} else if (OrderIn === 'Espresso') {
    console.log('Your Coffee order was successfully done! Please, wait for your order ready.')
} else if (OrderIn === 'Herbal Tea') {
    console.log('Your Tea order was successfully done! Please, wait for your order ready.')
} else if (OrderIn === 'Black Tea') {
    console.log('Your Tea order was successfully done! Please, wait for your order ready.')
} else if (OrderIn === 'Green Tea') {
    console.log('Your Tea order was successfully done! Please, wait for your order ready.')
} else if (OrderIn === 'White Tea') {
    console.log('Your Tea order was successfully done! Please, wait for your order ready.')
} else if (OrderIn === 'Dolong Tea') {
    console.log('Your Tea order was successfully done! Please, wait for your order ready.')
} else
    console.log('Your order is not correct or its not avialable now!')