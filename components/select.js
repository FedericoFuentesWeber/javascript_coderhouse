export function select(id, name, optionValues) {
    const select = document.createElement("select")
    select.setAttribute("id", id);
    select.setAttribute("name", name);
    optionValues.forEach(optionValue => {
        const option = document.createElement("option")
        option.setAttribute("value", optionValue)
        option.innerText = optionValue
        select.append(option)
    })
    return select
}
