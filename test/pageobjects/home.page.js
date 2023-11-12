class HomePage{

    get pageHeader(){
        return $('h1');
    }
    get linkSale() { 
        return $('//a[span[text()="Sale"]]');
    }
    get iconMyCart(){
        return $('//a[@class="action showcart"]');
    }
    get buttonProceedToCheckOut(){
        return $('#top-cart-btn-checkout')
    }
    async clickElement(element){
        element.waitForDisplayed();
        element.click();
    }
    async goToCart(){
        this.clickElement(this.iconMyCart)
        this.clickElement(this.buttonProceedToCheckOut)
    }
}

module.exports = new HomePage();