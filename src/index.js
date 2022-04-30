import './style.css';
import { ShowList } from './ShowList';

const app = document.getElementById('app');

export const showPersons = (list) => {
  app.appendChild(
    ShowList({
      list,
      someWoman,
      maleOrFemale,
      otherGender,
      longNames,
      adultMale,
      prettyNameAge,
      prettyNameGender,
      averageAge
    })
  )
}

// Implementujte následující funkce

/**
 * Vrací pravdivostní hodnotu, zda seznam osob obsahuje nějakou ženu.
 */
const someWoman = (persons) => {
  return persons.some((person) => person.gender === 'female')
}

/**
 * Vrací pravdivostní hodnotu, zda seznam osob obsahuje jen muže nebo ženy.
 */
const maleOrFemale = (persons) => {
  return persons.every((person) => person.gender === 'male' || person.gender === 'female')
}

/**
 * Vrací pravdivostní hodnotu, zda seznam osob obsahuje jiné pohlaví než muži nebo ženy.
 */
const otherGender = (persons) => {
  return persons.some((person) => person.gender !== 'male' && person.gender !== 'female')
}

/**
 * Vrací seznam osob, jejichž jméno je delší než 4 znaky
 */
const longNames = (persons) => {
  return persons.filter((person) => person.name.length > 4)
}

/**
 * Vrací seznam dospělých mužů.
 */
const adultMale = (persons) => {
  return persons.filter((person) => person.age > 17 && person.gender === 'male')
}

/**
 * Vrací seznam osob ve formátu "Jméno (věk)"
 */
const prettyNameAge = (persons) => {
  return persons.map((person) => `${person.name} (${person.age})`)
}

/**
 * Vrací seznam dospělých osob ve formátu "X Jméno" kde X je značka pohlaví: ♂, ♀, ○
 */
const prettyNameGender = (persons) => {
  return persons
    .filter((person) => person.age >= 18)
    .map(person => {
      let symbol = '○'
      if (person.gender === 'female') {
        symbol = '♀'
      } else if (person.gender === 'male') {
        symbol = '♂'
      }
      return {
        name: person.name,
        genderSymbol: symbol
      }
    })
    .map((person) => `${person.genderSymbol} ${person.name}`)
}

/**
 * Vrací průměrný věk osob. 
 */
const averageAge = (persons) => {
  let sum = 0;
  persons.forEach((person) => sum += person.age)
  return sum / persons.length
}

// zobrazení seznamů
showPersons(
  [
    { name: 'Petr', age: 16, gender: 'male' },
    { name: 'Jana', age: 8, gender: 'female' },
    { name: 'Pavel', age: 34, gender: 'male' },
    { name: 'Zuzana', age: 41, gender: 'female' },
    { name: 'Eva', age: 13, gender: 'female' },
    { name: 'Adam', age: 22, gender: 'male' },
    { name: 'Tomáš', age: 17, gender: 'male' },
    { name: 'Onyx', age: 37, gender: 'intersex' },
  ]
)

showPersons(
  [
    { name: 'Jana', age: 8, gender: 'female' },
    { name: 'Zuzana', age: 41, gender: 'female' },
    { name: 'Eva', age: 13, gender: 'female' },
  ]
)

showPersons(
  [
    { name: 'Anna', age: 16, gender: 'female' },
    { name: 'Pavel', age: 34, gender: 'male' },
    { name: 'Jiřina', age: 22, gender: 'female' },
    { name: 'Pat', age: 9, gender: 'wood' },
    { name: 'Mat', age: 9, gender: 'wood' }
  ]
)

showPersons(
  [
    { name: 'Petr', age: 16, gender: 'male' },
    { name: 'Pavel', age: 34, gender: 'male' },
    { name: 'Adam', age: 22, gender: 'male' },
    { name: 'Tomáš', age: 17, gender: 'male' }
  ]
)
