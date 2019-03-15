function StoriesController(StoriesService) {
  let ctrl = this

  ctrl.stories = []

  StoriesService
    .getStories()
    .then(resp => {
      ctrl.stories = resp.data
    })
    .then(console.log(ctrl.stories))

}

angular
  .module('app')
  .controller('StoriesController', StoriesController)
