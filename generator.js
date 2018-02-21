var fs = require('fs-extra')
var path = require('path')
module.exports = {
    generate:function(folderName, projectType){
        fs.mkdir('./' + folderName, function(err){
            if (err) {
                console.error(err)
            }
            else {
                if (projectType === "node-simple-server"){
                    fs.copy('C:/Users/jordanb/Source/Repos/node-server-simple/server.js', './'+folerName)
                }
            }
        })
    }
}