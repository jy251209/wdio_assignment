class ItemPage{

    get buttonAddToCart(){
        return $('#product-addtocart-button')
    }
    get inputQty(){
        return $('#qty')
    }
    get msgAddedToCart(){
        return $("//div[@data-bind='html: $parent.prepareMessageForHtml(message.text)']")
    }
    get itemName() {
        return $("//span[@class='base']")
    }
    get iconMyCart(){
        return $('//a[@class="action showcart"]')
    }
    get buttonProceedToCheckOut(){
        return $('#top-cart-btn-checkout')
    }
    getItemSize(size) {
        return $(`//div[span[text()='Size']]//div[@option-label='${size}']`)
    }
    getItemColor(color) {
        return $(`//div[span[text()='Color']]//div[@option-label='${color}']`)
    }
    async selectItem(size,color,qty){
        await this.getItemSize(size).click()
        await this.getItemColor(color).click()
        await this.inputQty.setValue(qty)
    }
    async clickElement(element){
        element.waitForDisplayed();
        element.click();
    }
}

module.exports = new ItemPage();