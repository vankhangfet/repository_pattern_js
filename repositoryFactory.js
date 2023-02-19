
var repositoryFactory = function () {
    var repos = this;
    var repositories = [
        /*
          If we need to change DB to Inmemory or others DB, only chang this configuration.
        */
        //{name: "users", source: require("./userRepository")},
    ];

    var Init = function (params) {

        for (let i = 0; i < params.length; i++) {
            repositories.push(params[i]);
            repositories.forEach(function (repo) {
                repos[repo.name] = repo.source;
            });
        }
        return repos;
    }

    return {

        Init: Init
    }

};

module.exports = new repositoryFactory();