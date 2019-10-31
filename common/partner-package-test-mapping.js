'use strict';
 var app = require("../../server/server");
module.exports = function(Partnerpackagetestmapping) {

   
    Partnerpackagetestmapping.FINDANS = function(pid, tid, callback){
        Partnerpackagetestmapping.find({
            where: {or: [{test_id: {inq: tid}},{package_id:{inq: pid}}]},
            fields:["test_id"]
            ,include:{
                relation:'partnerTest_rel', scope:{
                    fields:["id","partner_id","name","description","price","status","sample"],
                    include:{relation:'masterCategoryValues',scope:{
                        fields:["category_value"],
                    }}
                }
            }
        
            }, function(err, results) {
                if(err)
                    callback(err, null)
                else    
                    callback(null, results)
            })
           
    }
    Partnerpackagetestmapping.remoteMethod('FINDANS',
     {
         accepts:[{arg:'pid' ,type:'array'},{arg:'tid',type:'array'}],
         returns:{arg:'masterValues', type:'array'},
         http:{verb:'get'}
     })

     /// include FOR PACKAGE MODEL

     Partnerpackagetestmapping.PACKAGE =function(callback){
        Partnerpackagetestmapping.find({
            where:{"id":101}}, 
            //include:{relation:'partnerTest_rel',
        //scope:{fields:["name","prtner_id","price"]}
         //},
        
             
         function(err, results) {
            if(err)
                callback(err, null)
            else    
                callback(null, results)
        })
     }
     Partnerpackagetestmapping.remoteMethod('PACKAGE',{
      //   accepts:{arg:'Pid',type:'number'},
         returns:{arg:'list',type:'array'},
         http:{verb:'get'}
     })
};
