const H1 = ({ text }) => {
  const element = document.createElement('h1');
  element.textContent = text
  return element;
}

const H2 = ({ text }) => {
  const element = document.createElement('h2');
  element.textContent = text
  return element;
}

const Column = ({ title, content }) => {
  const element = document.createElement('div');
  element.classList.add('column')
  element.appendChild(H2({ text: title }))

  const body = document.createElement('div');
  if (Array.isArray(content)) {
    content.forEach(item => body.appendChild(item))
  } else {
    body.appendChild(content)
  }

  element.appendChild(body)
  return element;
}

const List = ({ list }) => {
  if (list == null) {
    const emptyElement = document.createElement('div');
    emptyElement.classList.add('empty')
    emptyElement.innerHTML = '❔'
    return emptyElement

  }
  const listElement = document.createElement('ul');
  list.forEach(item => {

    const itemElement = document.createElement('li');
    itemElement.textContent = item;
    listElement.appendChild(itemElement);
  })
  return listElement;
}

const Value = ({ title, value }) => {
  const rootElement = document.createElement('div');
  rootElement.classList.add('item')

  const textElement = document.createElement('div');
  textElement.textContent = title
  rootElement.appendChild(textElement)

  rootElement.appendChild(value)

  return rootElement;
}

const TrueOrFalse = ({ title, value }) => {
  const icon = document.createElement('span');
  if (value == null) {
    icon.textContent = '❔'
  } else {
    icon.textContent = value ? '✅' : '❌'
  }


  return Value({ title, value: icon })
}

const NumberValue = ({ title, value }) => {
  const number = document.createElement('span');
  if (value == null) {
    number.textContent = '❔'
  } else {
    number.textContent = value.toLocaleString('cs-CZ', { maximumFractionDigits: 1 })
  }

  return Value({ title, value: number })
}

const mapPersonInfo = (list) => {
  if (list == null) {
    return null
  }
  return list.map(item => `${item.name}, ${item.age}, ${item.gender}`)
}

export const ShowList = ({ list, maleOrFemale, otherGender, someWoman, longNames, adultMale, prettyNameAge, prettyNameGender, averageAge }) => {

  const rootElement = document.createElement('section');

  rootElement.appendChild(Column({ title: 'Výchozí seznam', content: List({ list: mapPersonInfo(list) }) }))

  rootElement.appendChild(Column({
    title: 'Údaje', content: [
      TrueOrFalse({ title: 'Seznam obsahuje nějakou ženu', value: someWoman(list) }),
      TrueOrFalse({ title: 'Seznam obsahuje jen muže a ženy', value: maleOrFemale(list) }),
      TrueOrFalse({ title: 'Seznam obsahuje jiná pohlaví', value: otherGender(list) }),
      NumberValue({ title: 'Průměrný věk', value: averageAge(list) }),
    ]
  }))
  rootElement.appendChild(Column({ title: 'Jména delší než 4 znaky', content: List({ list: mapPersonInfo(longNames(list)) }) }))
  rootElement.appendChild(Column({ title: 'Dospělí muži', content: List({ list: mapPersonInfo(adultMale(list)) }) }))
  rootElement.appendChild(Column({ title: 'Jméno a věk', content: List({ list: prettyNameAge(list) }) }))
  rootElement.appendChild(Column({ title: 'Dospělí – jméno a pohlaví', content: List({ list: prettyNameGender(list) }) }))

  return rootElement;
}