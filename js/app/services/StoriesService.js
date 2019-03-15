function StoriesService($http) {

  let url = 'https://hacker-news.firebaseio.com/v0/'

  this.getStories = () => {
    return $http.get(url + 'topstories.json')
  }

  this.getStory = id => {
    return $http.get(url + id + '.json')
  }
}

angular
  .module('app')
  .service('StoriesService', StoriesService)
