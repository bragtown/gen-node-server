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
                    fs.copy('C:/Users/jordanb/Source/Repos/gen-node-server/templates/node-simple-server/', './'+folderName, function(err){
                        if(err){
                            console.log(err)
                        }
                        else{
                            console.log("success!")
                        }
                    })
                }
                else if (projectType === "node-mongo-server"){
                    fs.copy('C:/Users/jordanb/Source/Repos/gen-node-server/templates/node-mongo-server/', './'+folderName, function(err){
                        if(err){
                            console.log(err)
                        }
                        else{
                            console.log("success!")
                        }
                    })
                }
                else if (projectType === "node-mongo-auth-server"){
                    fs.copy('C:/Users/jordanb/Source/Repos/gen-node-server/templates/node-mongo-auth-server/', './'+folderName, function(err){
                        if(err){
                            console.log(err)
                        }
                        else{
                            console.log("success!")
                        }
                    })
                }
            }
        })
    }
}