import { SaraPage } from "./bracketologyPOM";

const sara = new SaraPage();

test('bracketoloy contact us form', async () => {
    await sara.navigate()
    await sara.driver.sleep(3000)
    await sara.click(sara.adBtn)
    await sara.click(sara.contact)
    await sara.driver.sleep(4000)
    await sara.click(sara.adBtn)
    await sara.driver.sleep(4000)
    await sara.click(sara.cFName)
    await sara.setInput(sara.cFName, 'test')
    await sara.click(sara.cLName)
    await sara.setInput(sara.cLName, 'tester')
    await sara.click(sara.cEmail)
    await sara.setInput(sara.cEmail, 'test@test.com')
    await sara.click(sara.message)
    //await sara.setInput(sara.messageSend, 'testing, testing')
    await sara.driver.sleep(2000)
    await sara.click(sara.messageSend) 
    await sara.driver.sleep(3000) 
});

afterAll(async () => {
    await sara.driver.quit()
});