module.exports = {
    personalDetails: {
        email: 'test@1.com',
        firstname: 'Tom',
        lastname: 'Cruise',
        street: 'clara',
        city: 'Jena',
        state: 'Maryland',
        postcode: '07743',
        country: 'Germany',
        phone: '12345'
    },
    itemDetails: {
        gender: ['Mens', 'Womens'],
        category: 'Tees',
        size: 'S',
        color: 'Black',
        Qty: '2'
    },
    messageConstant: {
        thankYouMsg: 'Thank you for your purchase!',
        expectedMsgItemAdded: (text) => `You added ${text} to your shopping cart.`
    },
    shippingMethod: {
        Fixed: 'flatrate_flatrate',
        TableRate: 'tablerate_bestway'
    }
}