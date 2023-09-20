const main = document.getElementById('main')

export const replaceContent = items => {
    main.innerHTML = '';

    if (Array.isArray(items)) {
        items.forEach(item => {
            if (item instanceof Node) {
                main.appendChild(item);
            } else {
                console.error('Invalid DOM node:', item);
            }
        });
    } else if (items instanceof Node) {
        main.appendChild(items);
    } else {
        console.error('Invalid DOM node:', items);
    }
};

export const addContent = content => main.append(content)
