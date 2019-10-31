'use strict';
var app = require('../../server/server');

module.exports = function(Partnerpackage) {
    var partner_test  = app.models.partner_test; 
    var master_category_values = app.models.master_category_values;
    var testMapping = app.models.partner_package_test_mapping ;
    

  

 
   
// END OF FIND METHOD

// -------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



};

/*
// inout arrpackageir  and test id
1-> packageid id array -> testid arry using mappingh table
adding test id 
// arry contains all test id
input arr1 and arr2 
// [101,102,103] [50001]
//[50001,50002,50003,50001]
testid=[]
sampleid=[]
arr1.forEach(element =>{
    mappin.find(where:{"id":element}).then (res=>{
        testid.push(res);
      
    })
})
testid.push(arr2);
testid.forEach(tid=>{
    partnertest.find(where:{"id":tid}).then(res2=>{
        sampleid.push({sampleid:res2.sampleid});

    })
}
}

)
cb(null,sampleid);
*/