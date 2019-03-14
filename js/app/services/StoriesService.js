function StoriesService($http) {

  let storiesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json'

  this.getStories = () => {
    return $http.get(storiesUrl)
  }
}

angular
  .module('app')
  .service('StoriesService', StoriesService)
