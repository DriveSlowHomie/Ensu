namespace app.Controllers {
  export class HomeController {
    public bugs
    public bug;
    public bugName;
    public description;
    public discoveredBy;
    public assignedTo;
    public id;

    constructor(
      private bugService: app.Services.BugService,
      private $state: ng.ui.IStateService,
      private $stateParams: ng.ui.IStateParamsService,
    ) {
      this.bugs = this.bugService.query()
    }

    public resolved(){
      this.id = this.$stateParams['id'];
      console.log(`This is the id from controller: ${this.id}`)
      this.bugService.remove(this.id).then(() => {
      this.$state.go("Home");
  })
    }

    public add() {
      this.bug = {
          bugName: this.bugName,
          description: this.description,
          discoveredBy: this.discoveredBy,
          assignedTo: this.assignedTo,
          date_created: Date,
      }
      this.id = this.$stateParams['id'];

      console.log(`this is being called in the controller ${this.bug.bugName}`)
      this.bugService.add(this.bug).then((res)=>{
        console.log(res, " Yayyyyyy")
      })
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
