let projects = []

projects[0] = {
  projectID: 1,
  mapURL: 'http://arcg.is/2FbqHdV',
  projectTitle: 'Interesting Spots on LSU Campus',
  projectDesc: 'Story map visiting places across campus',
  hasThumbnail: true,
  projectTags: ['storymap','LSU','ch1']
}

projects[1] = {
    projectID: 2,
    mapURL: 'https://www.arcgis.com/apps/View/index.html?appid=627c388e7fb34674827740af699d9684',
    projectTitle: 'Real-time Earthquakes 4.5M+, 1 week',
    projectDesc: 'Looks at earthquakes with a magnitude of 4.5 or higher real time, within the last week',
    hasThumbnail: true,
    projectTags: ['earthquake','realtime','ch2']
}

for(let i = 0; i < projects.length; i++){
  console.log('Element ' + i + ' title: ' + projects[i].projectTitle)
  if (projects[i].hasThumbnail === true) {
    console.log('images/assignment-' + projects[i].projectID + '.png') // build and log an image file name based on the project ID
  }
}
