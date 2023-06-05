const loginData = require('../../fixtures/login/loginData.json')

class baseLogin{
    username=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password=':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    buttonLogin='.oxd-button'
    breadCrumb='.oxd-topbar-header-breadcrumb > .oxd-text'
    urlDashboar='web/index.php/dashboard/index'
    urlLogin='https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'

    inputUsername(){
        cy.ketik(this.username, loginData.username)
    }
    inputPassword(){
        cy.ketik(this.password, loginData.password)
    }
    klikBtnLogin(){
        cy.klik(this.buttonLogin)
    }
    validasiBradcrumb(){
        cy.get(this.breadCrumb).should('be.visible')
    }
    validasiUrl(){
        cy.url().should('include', this.urlDashboar)
    }
    validasipagelogin(){
        cy.url().should('include', this.urlLogin)
    }
}
export default baseLogin