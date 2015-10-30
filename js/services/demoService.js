/**
 * Created by svelupula on 10/3/2015.
 */
materialAdmin
    .service('leadsService', ['$resource', function($resource){
        this.getLeads = function() {
            var leadsList = $resource("http://localhost:60262/leads?start=10&limit=10");
            var leads =  leadsList.get();
            console.log(leads);
            return leads;
        }
    }]);