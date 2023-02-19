
const userServices = require('./services/userservice');

const repository = require('./repository/repositoryFactory');

var userRepo =  {name: "users", source: require("./repository/userRepository")};


const repos = repository.Init([userRepo]);

var userService = userServices.Init(repos.users);

let user = userService.getUserInfo();

console.log(user);
