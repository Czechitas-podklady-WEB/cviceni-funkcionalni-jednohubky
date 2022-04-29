import { ShowList } from './ShowList';
import './style.css';

const app = document.getElementById('app');

const maleOrFemale = (list) => {

}

const otherGender = (list) => {

}

const someMan = (list) => {

}

const longNames = (list) => {

}

const adultMale = (list) => {

}

const prettyName = (list) => {

}

const averageAge = (list) => {

}

app.appendChild(
  ShowList({
    title: 'Základní seznam',
    list: [
      { name: 'Petr', age: 16, gender: 'male' },
      { name: 'Jana', age: 8, gender: 'female' },
      { name: 'Pavel', age: 34, gender: 'male' },
      { name: 'Zuzana', age: 41, gender: 'female' },
      { name: 'Eva', age: 13, gender: 'female' },
      { name: 'Adam', age: 22, gender: 'male' },
      { name: 'Adam', age: 22, gender: 'male' },
      { name: 'Onyx', age: 37, gender: 'intersex' },
    ],
    maleOrFemale,
    otherGender,
    someMan,
    longNames,
    adultMale,
    prettyName,
    averageAge
  })
)

app.appendChild(
  ShowList({
    title: 'Pouze muži',
    list: [
      { name: 'Petr', age: 16, gender: 'male' },
      { name: 'Pavel', age: 34, gender: 'male' },
      { name: 'Adam', age: 22, gender: 'male' },
      { name: 'Adam', age: 22, gender: 'male' }
    ],
    maleOrFemale,
    otherGender,
    someMan,
    longNames,
    adultMale,
    prettyName,
    averageAge
  })
)

app.appendChild(
  ShowList({
    title: 'Pouze ženy',
    list: [
      { name: 'Jana', age: 8, gender: 'female' },
      { name: 'Zuzana', age: 41, gender: 'female' },
      { name: 'Eva', age: 13, gender: 'female' },
      { name: 'Adam', age: 22, gender: 'male' },
      { name: 'Adam', age: 22, gender: 'male' },
    ],
    maleOrFemale,
    otherGender,
    someMan,
    longNames,
    adultMale,
    prettyName,
    averageAge
  })
)
