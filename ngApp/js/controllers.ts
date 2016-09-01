namespace app.Controllers {
  export class HomeController {
    public bugs

    constructor(
        private bugService: app.Services.BugService
    ) {
      this.bugs = this.bugService.query();
    }
  }

  export class BugController {

    constructor() {

    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
