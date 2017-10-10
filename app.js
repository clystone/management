(function () {
  'use strict';
  let myApp = angular.module("myApp", ['ui.router']);
  myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state("login", {
        url: "/",
        templateUrl: "login.html",
        controller: 'LoginCtr'
      })
      .state("main", {
        url: "/main",
        templateUrl: "main/main.view.html",
        controller: 'MainCtr'
      })
  });
  myApp.controller('LoginCtr',['$scope',function ($scope) {

  }]);
  myApp.controller('MainCtr',['$scope',function ($scope) {
    $(function () {
      let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        let links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
      };

      Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        let $this = $(this);
        let $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
          $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        }
      };

      let accordion = new Accordion($('#accordion'), false);
    });
  }])
})();