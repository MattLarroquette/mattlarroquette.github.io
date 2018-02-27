let projectArray = [
  1,
  'http://arcg.is/2FbqHdV',
  'Interesting Spots on LSU Campus',
  'Story map visiting places across campus',
  true,
  ['storymap','LSU','ch1']
]

let projectObject = {
  projectID: 1,
  mapURL: 'http://arcg.is/2FbqHdV',
  projectTitle: 'Interesting Spots on LSU Campus',
  projectDesc: 'Story map visiting places across campus',
  hasThumbnail: true,
  projectTags: ['storymap','LSU','ch1']
}

console.log(projectArray[1])

console.log(projectObject["mapURL"])
console.log(projectObject.mapURL)
