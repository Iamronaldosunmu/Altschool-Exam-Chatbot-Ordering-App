class CustomerSessionEvent {
    constructor({ data, eventName, message }) {
        this.data = data;
        this.eventName = eventName;
        this.message = message;
    }
}


class CustomerSession {
    constructor({ io }) {
        this.customer = null;
        this.orders = [];
        this.currentOrder = null;
    }
    startNewOrder() {
        
    }
}