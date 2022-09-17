import { SaraPage } from "./bracketologyPOM";

const sara = new SaraPage();

test('bracketoloy login', async () => {
    await sara.navigate()
    await sara.driver.sleep(4000)
    await sara.click(sara.login)
    await sara.click(sara.userName)
    await sara.setInput(sara.userName, 'srdaneshmand@gmail.com')
    await sara.click(sara.password)
    await sara.setInput(sara.password, 'Soloproject1!')
    await sara.click(sara.logInButton)
});

afterAll(async () => {
    await sara.driver.quit()
});