namespace app.Controllers {
  export class HomeController {

    public bugs
    public bug;
    public bugName;
    public description;
    public discoveredBy;
    public assignedTo;

    constructor(
      private bugService: app.Services.BugService
    ) {
      this.bugs = this.bugService.query()
      // .then((res)=>{console.log("got stuff")});
    }

    public add() {
      this.bug = {
          bugName: this.bugName,
          description: this.description,
          discoveredBy: this.discoveredBy,
          assignedTo: this.assignedTo,
          date_created: Date,
      }
      console.log(`this is being called in the controller ${this.bug.bugName}`)
      this.bugService.add(this.bug).then((res)=>{
        console.log(res, " Yayyyyyy")
      })
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
