function shoppingCart(action, object, cart=[]){
    let shoppingCart = cart.slice()
    if(object || action=="empty" || action=='show'){
        switch(action){

        case 'add':
            shoppingCart.push(object); 
            console.log(`Here is your current cart:`)
                for(const item of shoppingCart){
                    console.table(item)
                }
            return shoppingCart

        case 'remove':
            if(shoppingCart.includes(object)){
                let index = shoppingCart.indexOf(object)
                shoppingCart.splice(index,1)
                console.log(`Here is your new cart:`)
                for(const item of shoppingCart){
                    console.table(item)
                }
                return shoppingCart
            }else{
                console.log("Item is not in your cart, but here is your current cart:")
                for(const item of shoppingCart){
                    console.table(item)
                }
                return shoppingCart
            }   
            

        case 'empty':
            shoppingCart.splice(0,shoppingCart.length)
            console.log(`Your cart is now empty:`)
            for(const item of shoppingCart){
                console.table(item)
            }
            return shoppingCart

        case 'show':
            console.log(`Here is your current cart:`)
            for(const item of shoppingCart){
                console.table(item)
            }
            return shoppingCart

        default:
            console.log("Please select a valid action")
            console.log(`Here is your current cart:`)
            for(const item of shoppingCart){
                console.table(item)
            }
        }
    }else{
        console.log(`You did not designate an object, but here is your current cart:`)
        for(const item of shoppingCart){
            console.table(item)
        }
        return shoppingCart
    }
    }
    

    eggs = {
            name: "Eggs",
            price: 5,
            desc: "Dozen Eggs"
        }
    bacon = {
            name: "Bacon",
            price: 5,
            desc: "Sizzling"
        }
    lettuce = {
            name: "Lettuce",
            price: 5,
            desc: "Crispy Head of Lettuce"
        }
    tomato = {
            name: "Tomato",
            price: 5,
            desc: "Juicy"
        }
    cookies = {
            name: "12 cookies",
            price: 5,
            desc: "scrumcious"
        }
    kraft_mac_and_cheese = {
            name: "Mac and cheese, made by Kraft",
            price: 5,
            desc: "Cheesy"
        }
    
cart1 =[eggs,bacon,lettuce]

shoppingCart("add", tomato, cart1) 
shoppingCart("remove", tomato, cart1) 
shoppingCart("show", tomato, cart1) 
shoppingCart("empty", tomato, cart1)
 



//===========================================================================================//
//===========================================================================================//
//===========================================================================================//
//===========================================================================================//


class Customer{
    constructor(name, cart=[]){
        this.name = name;
        this.cart=cart;
    }

    enterStore(){
        console.log(`Welcome to our store ${this.name}!`);
    }


    makeItem(itemName, itemPrice, itemDesc){
        return {
            name: itemName,
            price: itemPrice,
            desc: itemDesc
        }
    }

    shoppingCart(action, object){

        if(object || action=="empty" || action=='show'){
            switch(action){
    
            case 'add':
                this.cart.push(object); 
                console.log(`Here is your new cart:`)
                for(const item of this.cart){
                    console.table(item)
                }
                return this.cart
    
            case 'remove':
                if(this.cart.includes(object)){
                    let index = this.cart.indexOf(object)
                    this.cart.splice(index,1)
                    console.log(`Here is your new cart:`)
                    for(const item of this.cart){
                        console.table(item)
                    }
                    return this.cart
                }else{
                    console.log("Item is not in your cart, but here is your current cart:")
                    for(const item of this.cart){
                        console.table(item)
                    }
                    return this.cart
                }
                
    
            case 'empty':
                this.cart.splice(0,this.cart.length)
                console.log(`Your cart is now empty:`)
                for(const item of this.cart){
                    console.table(item)
                }
                return this.cart
    
            case 'show':
                console.log(`Here is your current cart:`)
                for(const item of this.cart){
                    console.table(item)
                }
                return this.cart
    
            default:
                console.log("Please select a valid action")
                console.log(`Here is your current cart:`)
                for(const item of this.cart){
                    console.table(item)
                }
            }
        }else{
            console.log(`You did not designate an object, but here is your current cart:`)
            for(const item of this.cart){
                console.table(item)
            }
            return this.cart
        }
        }
}



let Giovanni = new Customer("Giovanni")
Giovanni.enterStore()
let eggs2 = Giovanni.makeItem('eggs',5,"dozen eggs")
let lettuce2 = Giovanni.makeItem('lettuce',2,"Crispy Head of Lettuce")
let tomato2 = Giovanni.makeItem('tomato',3,"juicy")
let bacon2 = Giovanni.makeItem('bacon',10,"sizzling")
Giovanni.shoppingCart('add',eggs2)
Giovanni.shoppingCart('add',lettuce2)
Giovanni.shoppingCart('add',tomato2)
Giovanni.shoppingCart('add',bacon2)
Giovanni.shoppingCart('empty','')
Giovanni.shoppingCart('add',tomato2)
Giovanni.shoppingCart('add',bacon2)
Giovanni.shoppingCart('show','')
Giovanni.shoppingCart('remove',tomato2)
