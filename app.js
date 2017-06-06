angular
.module('movieApp', [])
.controller('MovieCtrl', MovieCtrl);

function MovieCtrl () {
  console.log("Movie Controller Active!");
  var vm = this;

  vm.moviesToWatch = [
      {
        title: 'Inside Out',
        image: 'http://blogs-images.forbes.com/markhughes/files/2015/06/INSIDE-OUT-18.jpg'
      },
      {
        title: 'Star Wars: Episode VII',
        image: 'http://cdn.wegotthiscovered.com/wp-content/uploads/star-wars-episode-72.jpg'
      },
      {
        title: 'Shaun the Sheep',
        image: 'https://silentlondon.files.wordpress.com/2015/01/shaun_chase_quad_uk-release-date.jpg'
      },
      {
        title: 'The Big Short',
        image: 'http://static.standard.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2015/09/22/17/rysangos.jpg'
      },
      {
        title: 'Steve Jobs',
        image: 'http://www.geek.com/wp-content/uploads/2015/10/steve-jobs-movie-2015-holding.jpg'
      },
      {
        title: 'Se7en',
        image: 'http://cromeyellow.com/wp-content/uploads/2014/06/brad-pitt_se7en-crying.jpg'
      },
      {
        title: 'Trainwreck',
        image: 'http://www.trbimg.com/img-55a53d5c/turbine/ct-trainwreck-movie-review-amy-schumer-20150713'
      }
    ];

    vm.movie = {};
    vm.addMovie = function () {
      var newMovie = vm.movie;
      vm.movie = {};
      vm.moviesToWatch.push(newMovie);
    };

    vm.movieLimit = 5;
    vm.toggleMovieLimit = function() {
      if (vm.movieLimit) {
        vm.movieLimit = false;
      } else {
        vm.movieLimit = 5;
      }
    };

    vm.markWatched = function (movie) {
      movie.watched = (movie.watched ? false : true);
    }


console.log(vm);

};
