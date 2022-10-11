
export interface PaymentResponse{
    message:string,
    'MP-link':string,
    'key-client-side':{
        'public-key':string,
        'preference-id':string
    }
}
