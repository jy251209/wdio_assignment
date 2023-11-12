const TestData = require('../../data/testData')

class CheckOutPage{

    get inputEmail(){
        return $('#customer-email')
    }
    get inputFirstName(){
        return $('//input[@name="firstname"]')
    }
    get inputLastName(){
        return $('//input[@name="lastname"]')
    }
    get inputCompany(){
        return $('//input[@name="company"]')
    }
    get inputAddressLine1(){
        return $('//input[@name="street[0]"]')
    }
    get inputCity(){
        return $('//input[@name="city"]')
    }
    get selectState(){
        return $('//select[@name="region_id"]')
    }
    get inputPostCode(){
        return $('//input[@name="postcode"]')
    }
    get selectCountry(){
        return $('//select[@name="country_id"]')
    }
    get inputPhone(){
        return $('//input[@name="telephone"]')
    }
    get buttonRadioShippingMethod(){
        return $$("//tr[@data-bind='click: element.selectShippingMethod']//input[@type='radio']")
    }
    get buttonNext(){
        return $('//span[normalize-space()="Next"]')
    }
    async clickElement(element){
        element.waitForDisplayed();
        element.click();
    }
    async setValueForElement(element,val){
        element.waitForDisplayed();
        element.setValue(val)
    }
    async enterShippingAddress(email,firstname,lastname,street,city,state,postcode,country,phone){
        await browser.pause(3000);
        await this.setValueForElement(this.inputEmail,email)
        await this.setValueForElement(this.inputFirstName,firstname)
        await this.setValueForElement(this.inputLastName,lastname)
        await this.setValueForElement(this.inputCompany,'EQS')
        await this.setValueForElement(this.inputAddressLine1,street)
        await this.setValueForElement(this.inputCity,city)
        await browser.pause(3000);
        await this.selectState.selectByVisibleText(state)
        await this.setValueForElement(this.inputPostCode,postcode)
        await browser.pause(2000);
        await this.selectCountry.selectByVisibleText(country)
        await browser.pause(2000);
        await this.setValueForElement(this.inputPhone,phone)
    }
    async selectShippingMethod(){
        const count = await this.buttonRadioShippingMethod.length;
        if (count > 1){
            this.buttonRadioShippingMethod.forEach((radioButton) =>{
                const valueAttribute = radioButton.getAttribute('value');
                if (valueAttribute === TestData.shippingMethod.Fixed) {
                    radioButton.click();
                }
            })
        }
    }

}

module.exports = new CheckOutPage()