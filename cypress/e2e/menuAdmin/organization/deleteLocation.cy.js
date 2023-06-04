import baseHapuslocation from "../../../support/pageObject/baseHapusLocation.cy"

describe('M-009: Modul Admin - Organization - Delete Locations',()=>{
    const BaseHapusLocation = new baseHapuslocation()
    
    it('M-009.001: Hapus 1 lokasi yang jumlah pegawainya >=1', () => {
        cy.login()
        BaseHapusLocation.AksesMenuAdmin()
        BaseHapusLocation.askesOrganisasi()
        BaseHapusLocation.AksesMenuLocation()
        BaseHapusLocation.hapus1()
        BaseHapusLocation.danger()
    })

})