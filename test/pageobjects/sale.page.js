class SalePage {

    get itemsTees(){
        return $$("//div[@class='product-item-info']//a[@class='product-item-link']");
    }
    getCategoryDeals(category,gender) {
        return $(`//strong[span[text()="${gender}'s Deals"]]/following-sibling::ul[1]//li[a[text()='${category}']]/a`);
    }
    async clickElement(element){
        element.waitForDisplayed();
        element.click();
    }
    async selectCategoryItem(item,gender){
        await this.getCategoryDeals(item,gender).click()
        const itemCount = await this.itemsTees.length;
        if (itemCount > 0){
            const result = await this.itemsTees[1].getText()
            await this.clickElement(this.itemsTees[1])
            return result;
        }
    }
}

module.exports = new SalePage();