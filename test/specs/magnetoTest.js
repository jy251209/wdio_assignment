const HomePage = require('../pageobjects/home.page')
const SalePage = require('../pageobjects/sale.page')
const ItemPage = require('../pageobjects/item.page')
const CheckOutPage = require('../pageobjects/checkout.page')
const PaymentPage = require('../pageobjects/payment.page')
const TestData = require('../../data/testData')
const SuccessPage = require('../pageobjects/success.page')

describe("Magneto e2e", function(){

    it.skip("Order one item from WOMEN’S DEALS", async function(){
        await browser.url('/');
        await HomePage.clickElement(HomePage.linkSale)
        const text = await SalePage.selectCategoryItem(TestData.itemDetails.category, TestData.itemDetails.gender[1])
        await ItemPage.selectItem(TestData.itemDetails.size,TestData.itemDetails.color,TestData.itemDetails.Qty)
        await ItemPage.clickElement(ItemPage.buttonAddToCart)

        await expect(ItemPage.msgAddedToCart).to.be.displayed;

        const msgItemAdded = await ItemPage.msgAddedToCart.getText()
        const expectedMsgItemAdded = TestData.messageConstant.expectedMsgItemAdded(text);

        expect(msgItemAdded).to.equal(expectedMsgItemAdded);
    })

    it("Order one item from MEN’S DEALS", async function() {
        await browser.url('/');
        await HomePage.clickElement(HomePage.linkSale)

        const text = await SalePage.selectCategoryItem(TestData.itemDetails.category, TestData.itemDetails.gender[0])
        await ItemPage.selectItem(TestData.itemDetails.size,TestData.itemDetails.color,TestData.itemDetails.Qty)
        await ItemPage.clickElement(ItemPage.buttonAddToCart)
        await expect(ItemPage.msgAddedToCart).to.be.displayed;

        const msgItemAdded = await ItemPage.msgAddedToCart.getText()
        const expectedMsgItemAdded = TestData.messageConstant.expectedMsgItemAdded(text);

        expect(msgItemAdded).to.equal(expectedMsgItemAdded);
    })

    it("Proceed to checkout", async function(){
        await browser.url('/')
        await HomePage.goToCart()
        await CheckOutPage.buttonNext.waitForEnabled()
        await CheckOutPage.enterShippingAddress(TestData.personalDetails.email,TestData.personalDetails.firstname,TestData.personalDetails.lastname,TestData.personalDetails.street,TestData.personalDetails.city,TestData.personalDetails.state,TestData.personalDetails.postcode,TestData.personalDetails.country,TestData.personalDetails.phone)
        
        await CheckOutPage.selectShippingMethod()
        await CheckOutPage.buttonNext.waitForEnabled()
        await CheckOutPage.clickElement(CheckOutPage.buttonNext)
        await PaymentPage.buttonPlaceOrder.waitForEnabled()
        const orderTotal = await PaymentPage.textOrderTotal.getText()
        await PaymentPage.clickElement(PaymentPage.buttonPlaceOrder)
        await browser.pause(5000);
        await SuccessPage.textHeader.waitForDisplayed()
        const msgSuccess = await SuccessPage.textHeader.getText()

        await expect(msgSuccess).to.equal(TestData.messageConstant.thankYouMsg);
        await expect(SuccessPage.textOrderId).to.be.displayed;
    })

});