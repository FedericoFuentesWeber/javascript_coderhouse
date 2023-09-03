const main = document.getElementById('main')

export const replaceContent = items => main.replaceChildren(...items)
export const addContent = content => main.append(content)
