// synchronous code(run code line by line top to bottom)
let a = 1
let b = 2

console.log('synchronous')
console.log(a)
console.log(b)

// asynchronous code
let c = 1
let d = 2

setTimeout(function () {
  console.log('async code')
}, 3000)

console.log('asynchronous')
console.log(c)
console.log(d)

// Callback function
setTimeout(() => {
  console.log('This msg is shown after 5 seconds')
}, 5000)

// higher order functions in js
console.log('All higher order functions')
console.log('-------------------------------------------------------')
const companies = [
  { name: 'Company One', category: 'ek', start: 1981, end: 2001 },
  { name: 'Company two', category: 'be', start: 1980, end: 2002 },
  { name: 'Company three', category: 'tran', start: 1988, end: 2003 },
  { name: 'Company four', category: 'char', start: 1933, end: 2004 },
  { name: 'Company five', category: 'panch', start: 1961, end: 2005 },
  { name: 'Company six', category: 'chha', start: 1981, end: 2006 },
  { name: 'Company seven', category: 'sat', start: 1955, end: 2007 },
  { name: 'Company eight', category: 'aath', start: 1991, end: 2008 },
  { name: 'Company nine', category: 'nav', start: 2000, end: 2009 },
]

const ages = [11, 12, 13, 14, 15, 26, 27, 28, 29, 30, 32, 34, 36]

// for loop
console.log('For loop')
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i])
}

// forEach
console.log('-------------------------------------------------------')
console.log('For each')
companies.forEach(function (company) {
  console.log(company.name)
})

// Filter
console.log('-------------------------------------------------------')
console.log('Filter') // do with for loop
// let canDrink = []
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i])
//   }
// }

// using filter
// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true
//   }
// })

// using arrow function
const canDrink = ages.filter((age) => age >= 21)

console.log(canDrink)

// map
console.log('-------------------------------------------------------')
console.log('Map') // do with for loop
const companyNames = companies.map(function (company) {
  return company.name
})
console.log(companyNames)

const testMap = companies.map(function (company) {
  return `${company.name} [${company.start} - ${company.end}]`
})
console.log(testMap)

const testMapArw = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
)
console.log(testMapArw)

const agesDoubled = ages.map((age) => age * 2)
console.log(agesDoubled)

const agesSquare = ages.map((age) => Math.sqrt(age))
console.log(agesSquare)

// sort
const sortedCompanies = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1
  } else {
    return -1
  }
})
console.log(sortedCompanies)

// using arrow function and ternary operator
const sortArwTer = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
console.log(sortArwTer)

// Reduce
console.log('-------------------------------------------------------')
console.log('Reduce') // do with for loop

let ageSum = 0
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i]
}
console.log(ageSum)

const ageSumRed = ages.reduce(function (total, age) {
  return total + age
})
console.log(ageSumRed)

const ageSumArw = ages.reduce((total, age) => total + age, 0)
console.log(ageSumArw)
