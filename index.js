// Write your solution in this file!
var customerName = 'bob'

//changes above global-variable to uppercase letters
function upperCaseCustomerName() {
  return(customerName = customerName.toUpperCase())
}

function setBestCustomer(bestCustomer) {
    bestCustomer = 'not bob'
    return(bestCustomer)
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
    return(bestCustomer)
}

const leastFavoriteCustomer = 'Hunter'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Felix'
    return(leastFavoriteCustomer)
}