import baseDeletelocation from "../../../support/pageObject/baseDeletelocation.cy"

describe('Hapus Lokasi', () => {
  const BaseDeleteLocation = new baseDeletelocation()

  // it('Berhasil Hapus 1 lokasi', () => {
  //   cy.login()
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewLocations')
  //   BaseDeleteLocation.del1()
  //   BaseDeleteLocation.delConfrm()
  // })

  it('Berhasil Hapus 1 Lokasi yang diselect',()=>{
    cy.login()
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewLocations')
    BaseDeleteLocation.del1Selected()
    BaseDeleteLocation.del2()
    BaseDeleteLocation.delConfrm()
  })

  // it('Berahsil Hapus 1 Lokasi yang diselect > 1',()=>{
  //   cy.login()
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewLocations')
  //   BaseDeleteLocation.del2Selected()
  //   BaseDeleteLocation.del2()
  //   BaseDeleteLocation.delConfrm()
  // })
})