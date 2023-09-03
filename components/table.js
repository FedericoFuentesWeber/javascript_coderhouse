export function addRow(table, cellType, values) {
    const row = document.createElement('tr')
    values.forEach(cellData => {
        const cell = document.createElement(cellType)
        cell.innerText = cellData
        row.append(cell)
    })
    table.append(row)
}

export function table(id, headerValues) {
    const table = document.createElement('table')
    table.setAttribute('id', id)
    const row = document.createElement('tr')
    addRow(table, 'th', headerValues)
    table.append(row)
    return table
}
