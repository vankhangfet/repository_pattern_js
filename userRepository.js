var userRepository = function() {
  

   var getUserInfo = function() {

      return { Id: "VX123", username:" Jon"}
   };

   return {
      getUserInfo: getUserInfo
   };
};

module.exports = userRepository();