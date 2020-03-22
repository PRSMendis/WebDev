module.exports.getDate = getDate;

function getDate(params) {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
      }
      
      // var day = "" ;
      let day = today.toLocaleDateString("en-US" , options);

      return day
    
}

module.exports.getDay = function (params) {

    let today = new Date();

    let options = {
        weekday: "long",
      }
      
      // var day = "" ;
      let day = today.toLocaleDateString("en-US" , options);

      return day
    
}

// console.log(module.exports)