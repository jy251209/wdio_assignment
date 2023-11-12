class PaymentPage{

    get buttonPlaceOrder(){
        return $("//span[normalize-space()='Place Order']")
    }
    get textShippingAddress(){
        return $("//div[@class='ship-to']//div[@class='shipping-information-content']")
    }
    get textShippingMethod(){
        return $("//div[@class='shipping-information-content']//span[@class='value']")
    }
    get textOrderTotal(){
        return $("//tr[@class='grand totals']//span")
    }
    async clickElement(element){
        element.waitForDisplayed();
        element.click();
    }
}
module.exports = new PaymentPage()