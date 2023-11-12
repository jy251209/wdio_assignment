class SuccessPage{

    get textOrderId(){
        return $("//div[@class='checkout-success']/p/span")
    }
    get textHeader(){
        return $("//h1/span")
    }
}
module.exports = new SuccessPage()