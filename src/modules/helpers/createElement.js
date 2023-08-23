function createElement(tag, attributes = {}, textContent = "") {
    const element = document.createElement(tag);
    for (const attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute]);
    }
    element.textContent = textContent;
    return element;
}

export default createElement;
