export enum OrderStatus {
    // when the order has been created, but the ticket is trying to 
    // to order has not been reserved
    Created = 'created',

    // the ticket the order is trying to reserve has already been reserved
    // or when the user has cancelled the order
    //if the order expires before payment
    Cancelled = 'cancelled',

    // whenever the order has successfully reserved the ticket
    AwaitingPayment = 'awaiting:payment',

    // the order has reserved the ticket and the user has provided 
    // payment successfully
    Complete = 'complete'
}