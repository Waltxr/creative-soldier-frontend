class App {
  
  static init() {
    App.getAptData()
  }
  
  static getAptData() {
    const URL = 'http://localhost/'
    
    fetch(URL)
      .then(res => res.json())
      .then(apartments => {
        App.renderAptData(apartments)
    })
  }
  
  static renderAptData(apartments) {        
    const aptTable = document.getElementById('apartments').getElementsByTagName('tbody')[0]
    
    for (let apartment of apartments) {
      let newRow = document.createElement('tr')
      
      let name = document.createElement('td')
      name.innerText = apartment.ApartmentName
      newRow.appendChild(name)      
      
      let bedrooms = document.createElement('td')
      bedrooms.innerText = apartment.Beds
      newRow.appendChild(bedrooms)
      
      let bathrooms = document.createElement('td')
      bathrooms.innerText = apartment.Baths
      newRow.appendChild(bathrooms)
      
      let floorplan = document.createElement('td')
      floorplan.innerText = apartment.FloorplanName
      newRow.appendChild(floorplan)
      
      let rent = document.createElement('td')      
      let rentRange = `$${apartment.MinimumRent.slice(0, -3)} - $${apartment.MaximumRent.slice(0, -3)}`
      rent.innerText = rentRange
      newRow.appendChild(rent)
      
      let apply = document.createElement('td')
      let applyLink = document.createElement('a')
      applyLink.setAttribute('href', apartment.ApplyOnlineURL)
      applyLink.setAttribute('target', "_blank")
      applyLink.innerText = "Link"
      apply.appendChild(applyLink)
      newRow.appendChild(apply)
      
      aptTable.appendChild(newRow)
    }
  }
  
}