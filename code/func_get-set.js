const data = {
    locations: [],
    getLocation: function () {
       console.log(this.locations)
    },
    setLocation: function (val) {
        this.locations.push(val.trim())
    }
}

// code that uses the data object
data.setLocation("              philadelphie    ")
data.setLocation(' New York')
data.getLocation()
