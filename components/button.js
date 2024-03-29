function button(type, innerText) {
    const button = document.createElement("button");
    button.setAttribute("type", type);
    button.innerText = innerText;
    return button;
}

export const submitButton = innerText => button('submit', innerText)
