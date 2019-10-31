'use strict';

var app = require("../../server/server");
module.exports = function (Partnertest) {
  
    
        var rsult = [] 
   // var packages = app.models.partner_package
    Partnertest.partner_package = function (partner_id, cb) {
        app.models.partner_package.find({
            where: { "partner_id": partner_id ,"status":1}
        })
            .then(partner_packages =>{
                           Partnertest.find({ where: { "partner_id": partner_id,"status":1 } }).then( partner_tests => {

                                  rsult.push(partner_packages, partner_tests);
                                  cb(null , rsult)
                          });
                          })
                   
                }                            
                 Partnertest.remoteMethod('partner_package',
                    {
                        accepts: {
                            arg: "partner_id",
                            type: "number"
                        },
                        returns: {
                            arg: "partnetpackages",
                            type: "array"
                        },
                        http: { verb: "get" }
                    })

                 
                         
                
                
           

                // SECOND API2-----------------.............>>>>>>>>>>>>/////
                Partnertest.allval = (package1 , test , cb) => {
                    let j = 0 ;
                    let l = 0 ;
                    let result = [] ;
                    let sampleId = [] ;
                       
                    let id = []
                    var packages = app.models.partner_package ;
                       for(var k= 0 ; k < package1.length ; k++){
                     packages.findById(package1[k] , { include : 
                    { relation : 'partnerPackageTestMappings' , scope : {fields : {test_id : true}} }} )
                                .then( async(data) => {
                                     let testid = await data.partnerPackageTestMappings.find() ;
                                      if(testid.length > 0){
                                        l++ ;   
                                        testid.forEach( (ids) => {
                                                    id.push(ids.test_id) ;   
                                            })
                                          if(l === package1.length){ 
                                              check();
                                            }  
                                      }else{
                                          l++ ;
                                          if(l === package1.length){
                                              check();
                                            }
                                            } 
                                    }).catch( (err) => console.log(err.message) )     
                       } 
                            console.log(id);
                            console.log(test);

                    function check() {
                            test = [...new Set(id) , ...new Set(test)]
                            test = [...new Set(test)]
                          for(var i=0 ; i<test.length ; i++){
                            Partnertest.findById( test[i] ,{fields : {id : true} ,
                         include : {relation : 'masterCategoryValues' , scope : {fields : 
                             { category_id : true  , category_value : true }}} })
                             .then( async(data) => {
                            
                                let res =   await data.masterCategoryValues.find() ;
                                  if(res.length > 0){
                                     j++ ;
                            
                                     res.forEach( (maindata) => {
                                        result.push( maindata) ; 
                                        sampleId.push(maindata.category_id);
                                      } )
                                      if(j === test.length){
                                          sampleId = [...new Set(sampleId)] ;
                                          var alldata = [] ;
                                          for(var y = 0 ; y< sampleId.length ; y++){
                                            let data = result.find( i => i.category_id == sampleId[y] ) ;
                                            alldata.push(data);
                                          }
                                          cb(null , alldata);
                                         }
                                  }else{
                                     j++ ;
                                    if(j === test.length){
                                        cb(null , result);
                                     }
                                  }
                                } ).catch( (err) => console.log(err.message) )
                        } 
           
                     }   
                    }

                Partnertest.remoteMethod('allval' , {
                    accepts : [{arg : 'package' , type : 'array'} , {arg : 'test' , type : 'array'}  ] ,
                    returns : {arg : 'result' , type : 'array'} ,
                    http : {verb : 'get'}
                })
                
}
