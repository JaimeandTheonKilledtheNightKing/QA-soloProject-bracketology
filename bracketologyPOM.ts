import {BasePage} from './basePage'
import { By } from 'selenium-webdriver'

export class SaraPage extends BasePage {
    login: By = By.xpath('/html/body/div[1]/header/div/div[3]/div/div/div/div/form/input[2]');
    userName: By = By.id('fname');
    password: By = By.id('lname');
    logInButton: By = By.id('#searchForm');
    contact: By = By.xpath('(//li[@class="menu-item menu-item-type-post_type menu-item-object-page menu-item-958"])[1]');
    cFName: By = By.id('form-field-name');
    cLName: By = By.id('form-field-field_1b6c19a');
    cEmail: By = By.xpath('(//input[@class="elementor-field elementor-size-sm  elementor-field-textual js-bound"])[3]');
    message: By = By.xpath('//textarea[@class="elementor-field-textual elementor-field  elementor-size-sm"]')
    messageSend: By = By.css('.elementor-button-text')
    messageResults: By = By.xpath('//div[text()="The form was sent successfully."]')
    adBtn: By = By.xpath('//button[@class="fs-close-button fs-close-button-sticky"]')
    constructor() {
        super({url: "https://bracketology.tv"})
    };
}