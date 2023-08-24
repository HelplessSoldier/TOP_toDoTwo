function dispatchEvent(eventName, eventData) {
    const event = new CustomEvent(eventName, { detail: eventData });
    document.dispatchEvent(event);
}

export default dispatchEvent;
