var StarBucks = {
    coffee: {
        latte: 'Latte Coffee',
        cappuccino: 'Cappuccino Coffe',
        mokiato: 'Mokiato Coffee',
        espresso: 'Espresso Coffee'
    },
    tea: {
        black: 'Black Tea',
        green: 'Green Tea',
        herbal: 'Herbal Tea',
        fruit: 'Fruit Tea',
    }
}
console.log(StarBucks)
console.log(StarBucks.coffee)
console.log(StarBucks.coffee.latte)
console.log(StarBucks.coffee.cappuccino)
console.log(StarBucks.coffee.mokiato)
console.log(StarBucks.coffee.espresso)

console.log(StarBucks.tea)
console.log(StarBucks.tea.black)
console.log(StarBucks.tea.green)
console.log(StarBucks.tea.herbal)
console.log(StarBucks.tea.fruit)

var Order = prompt('Enter your order')
if (Order === 'latte' || Order === 'cappuccino' || Order === 'mokiato' || Order === 'espresso'){
    console.log('Your Coffee order was successfully done, please wait till it ready.')
}
else if (Order === 'black' || Order === 'green' || Order === 'herbal' || Order === 'fruit'){
    console.log('Your Tea order was successfully done, please wait till it ready.')
}
else
    console.log('Your order is not correct or its not avialable now. Please try back later!')

