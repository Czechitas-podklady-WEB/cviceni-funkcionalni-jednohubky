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

const List = ({ list }) => {
  if (list == null) {
    const emptyElement = document.createElement('div');
    emptyElement.innerHTML = `<em>Nic tu není</em>`
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

const TrueOrFalse = ({ value }) => {
  const element = document.createElement('div');
  element.textContent = value ? '✔' : '❌'
  return element;
}

const mapPersonInfo = (list) => {
  if (list == null) {
    return null
  }
  return list.map(item => `${item.name}, ${item.age}, ${item.gender}, `)
}

export const ShowList = ({ title, list, maleOrFemale, otherGender, someMan, longNames, adultMale, prettyName, averageAge }) => {
  const rootElement = document.createElement('div');

  rootElement.appendChild(H1({ text: title }))

  rootElement.appendChild(H2({ text: 'Celý seznam' }))

  rootElement.appendChild(List({ list: mapPersonInfo(list) }))

  rootElement.appendChild(H2({ text: 'Jen muži a ženy' }))
  rootElement.appendChild(TrueOrFalse({ value: maleOrFemale(list) }))

  rootElement.appendChild(H2({ titextle: 'Seznam obsahuje jiná pohlaví' }))
  rootElement.appendChild(TrueOrFalse({ value: otherGender(list) }))

  rootElement.appendChild(H2({ text: 'Seznam obsahuje nějakého muže' }))
  rootElement.appendChild(TrueOrFalse({ value: someMan(list) }))

  rootElement.appendChild(H2({ text: 'Jména delší než 4 znaky' }))
  rootElement.appendChild(List({ list: mapPersonInfo(longNames(list)) }))

  rootElement.appendChild(H2({ text: 'Dospělí muži' }))
  rootElement.appendChild(List({ list: mapPersonInfo(adultMale(list)) }))

  rootElement.appendChild(H2({ text: 'Hezké zobrazení jmen' }))
  rootElement.appendChild(List({ list: mapPersonInfo(prettyName(list)) }))

  rootElement.appendChild(H2({ text: 'Průměrný věk' }))
  rootElement.appendChild(document.createTextNode(averageAge(list)))

  return rootElement;
}