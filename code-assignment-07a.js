let projects2 = []

projects2[0] = {
  projectID: 1,
  mapURL: 'http://arcg.is/2FbqHdV',
  projectTitle: 'Interesting Spots on LSU Campus',
  projectDesc: 'Story map visiting places across campus',
  hasThumbnail: true,
  projectTags: ['storymap','LSU','ch1']
}

projects2[1] = {
    projectID: 2,
    mapURL: 'https://www.arcgis.com/apps/View/index.html?appid=627c388e7fb34674827740af699d9684',
    projectTitle: 'Real-time Earthquakes 4.5M+, 1 week',
    projectDesc: 'Looks at earthquakes with a magnitude of 4.5 or higher real time, within the last week',
    hasThumbnail: true,
    projectTags: ['earthquake','realtime','ch2']
}

let myTeam = pickWinner('Michigan State')
console.log(myTeam)

$(document).ready(console.log('The page is ready!'))
