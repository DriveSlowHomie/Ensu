namespace app.Services {

  export class BugService {
    public BugResource;

    constructor(
      private $resource: ng.resource.IResourceService
    ){
      this.BugResource = $resource('/api/bugs/:id')
    }

    public query(){
      return this.BugResource.query()
    }

    public add(bug){
      console.log(`this is being called in the services ${bug.bugName}`)
      return this.BugResource.save(bug).$promise
    }

    public remove(id){
      console.log(`this is id ${id}`)
      return this.BugResource.remove({id:id}).$promise;
    }

  }

  angular.module('app').service('bugService', BugService);
}
