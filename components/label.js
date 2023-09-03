export function label(inputId, innerText) {
    const label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.innerText = innerText;
    return label;
}
