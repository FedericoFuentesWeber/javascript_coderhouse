function input(id, name, type) {
    const input = document.createElement("input");
    input.setAttribute("id", id);
    input.setAttribute("name", name);
    input.setAttribute("type", type);
    return input;
}

export const textInput = (id, name) => input(id, name, 'text')
export const numericInput = (id, name) => input(id, name, 'number')
