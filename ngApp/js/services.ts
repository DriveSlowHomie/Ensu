namespace app.Services {

  export class BugService {
    public BugResource;

    constructor(
      private $resource: ng.resource.IResourceService
    ){
      this.BugResource = $resource('/api/route/bugRoute/:id')
    }

    public query(){
      return this.BugResource.query()
    }

  }

  angular.module('app').service('bugService', BugService);
}
