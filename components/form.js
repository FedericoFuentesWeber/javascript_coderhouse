export function form(children, onsubmit) {
    const form = document.createElement('form');
    children.forEach(child => form.append(child));
    form.onsubmit = event => {
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.target));
        onsubmit(formData, event.target);
    }
    return form;
}
