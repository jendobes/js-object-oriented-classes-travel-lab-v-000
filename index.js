let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    verticalDistance = Math.abs(beginningLocation.vertical - endingLocation.vertical)
    horizontalDistance = Math.abs(eastWest.indexOf(beginningLocation.horizontal) - eastWest.indexOf(endingLocation.horizontal))
    return verticalDistance + horizontalDistance
  }

  estimatedTime() {

  }
}
