
var userService = function() {

    var userRepo = this;
    var Init = function(repo){

        userRepo = repo;
        return this;
    }

    var getUserInfo = function() {

        return userRepo.getUserInfo();
    };
 
    return {
        Init: Init,
        getUserInfo: getUserInfo
     };
};

module.exports = new userService();