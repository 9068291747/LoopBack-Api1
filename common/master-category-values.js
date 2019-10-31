'use strict';

module.exports = function(Mastercategoryvalues) {
          // FOR CREATING NEW PACKAGE 
    // START
    Mastercategoryvalues.CREATENEW = function( category_id, partner_id, category_short_name, category_value, active_flag,
        created_date, created_by, last_modified_date,last_modified_by, cb){
            Mastercategoryvalues.create({
            "category_id": category_id,
            "partner_id": partner_id ,
            "category_short_name": category_short_name,
            "category_value": category_value,
            "active_flag": active_flag,
            "created_date": created_date,
            "created_by": created_by,
            "last_modified_date": last_modified_date,
            "last_modified_by": last_modified_by
            
          
        })
            .then(master_category_valuess => {
                cb(null, master_category_valuess);
            })
            .catch(err => {
                console.log(err);
            });
    }
    Mastercategoryvalues.remoteMethod('CREATENEW', {
      accepts:[{arg:"category_id",type:"number"},
               { arg:"partner_id", type:"number"},
                {arg:"category_short_name", type:"string"},
                {arg:"category_value", type:"string"},
                {arg:"active_flag", type:"string"},
                {arg:"created_date", type:"date"},
                {arg:"created_by", type:"number"},
                {arg:"last_modified_date", type:"date"},
                {arg:"last_modified_by", type:"number"}
                 ],
       returns:{arg:'NewMasterCategoryValues',type:'array'}
          
    });
    
///// END//////////////////////////////////////////////////


//FIND ALL TEST HERE
Mastercategoryvalues.FIND = function(cb){
    Mastercategoryvalues.find(
      
    )
    .then(master_category_valuess =>{
        cb(null, master_category_valuess);
    })
    .catch(err =>{
        cb(err);
    });
}
Mastercategoryvalues.remoteMethod('FIND', {
    returns:{arg:"NewMasterCategoryValuesList",type:"array"},
    http:{verb:"get"}
});
// END OF FIND METHOD



        // FOR UPDATING PACKAGE 
    // START
    Mastercategoryvalues.MODIFY = function( category_id, partner_id, category_short_name, category_value, active_flag,
        created_date, created_by, last_modified_date,last_modified_by, cb){
            Mastercategoryvalues.upsert({
            "category_id": category_id,
            "partner_id": partner_id ,
            "category_short_name": category_short_name,
            "category_value": category_value,
            "active_flag": active_flag,
            "created_date": created_date,
            "created_by": created_by,
            "last_modified_date": last_modified_date,
            "last_modified_by": last_modified_by
            
          
        })
            .then(master_category_valuess => {
                cb(null, master_category_valuess);
            })
            .catch(err => {
                console.log(err);
            });
    }
    Mastercategoryvalues.remoteMethod('MODIFY', {
      accepts:[{arg:"category_id",type:"number"},
               { arg:"partner_id", type:"number"},
                {arg:"category_short_name", type:"string"},
                {arg:"category_value", type:"string"},
                {arg:"active_flag", type:"string"},
                {arg:"created_date", type:"date"},
                {arg:"created_by", type:"number"},
                {arg:"last_modified_date", type:"date"},
                {arg:"last_modified_by", type:"number"}
                 ],
       returns:{arg:'UpdatedMasterCategoryValues',type:'array'}
          
    });
    
///// END//////////////////////////////////////////////////

    //  INCLUDE RELATION 

    Mastercategoryvalues.packageInclude_rel = function (partner_id ,cb) {
        Mastercategoryvalues.find({ "include":{
        "relation":'partnerPackage_rel', 
        "scope":{
          "partner_id":partner_id
        }
    }})
     .then(master_category_valuess => {                      
            cb(null, master_category_valuess);
        })
        .catch(err => {
            cb(err);
        });
    },
    Mastercategoryvalues.remoteMethod('packageInclude_rel ',{
        accepts:{arg:"partner_id",type:"number"},
        returns:{arg:'partnerPackageList',type:'array'},
        http:{verb:"get"}
    });

    ///.....SEARCH...>>>>>>>////////////////////////

    Mastercategoryvalues.SEARCH =function(category_value,cb){
        Mastercategoryvalues.find({where:{"category_value":category_value},fields:['active_flag','partner_id','category_id','category_short_name']})
        .then(Mastercategoryvaluess =>{
            cb(null,Mastercategoryvaluess);
        })
        .catch(err =>{
            cb(err);
        })
    }

    Mastercategoryvalues.remoteMethod('SEARCH',{
        accepts:{arg:'name',type:'string'},
        returns:{arg:'list',type:'array'},
        http:{verb:'get'}
    })

};
