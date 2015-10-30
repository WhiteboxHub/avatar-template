/**
 * Created by svelupula on 10/3/2015.
 */
materialAdmin
    .controller('demoCtrl', function ($scope, leadsService) {

        $scope.users = leadsService.getLeads();
        console.log(leadsService.getLeads());

      /*  $scope.users = [{
            firstName: 'Sam',
            lastName: 'Velupula',
            username: 'sampuv',
            nickname: 'Sampath'
        },
            {
                firstName: 'Sampath',
                lastName: 'Pam',
                username: 'Pam',
                nickname: 'Pam'
            },
            {
                firstName: 'Sandy',
                lastName: 'Desu',
                username: 'Desu',
                nickname: 'Desu'
            },
            {
                firstName: 'Saddam',
                lastName: 'Hussain',
                username: 'Hussain',
                nickname: 'Hussain'
            }];*/


    });