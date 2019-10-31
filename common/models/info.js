'use strict';

module.exports = function (Info) {

    Info.CREATE = function (form, cb) {
        console.log("data is : ", form)
        Info.create(form, function (err, res) {
            if (err) {
                cb(err)
            }
            else {
               
                cb(null, res);
                console.log(res);
            }
        })

    }
    Info.remoteMethod('CREATE', {
        accepts: { arg: "form", type: 'object' },
        returns: { arg: "list", type: "object" },
        http: { verb: 'post'}
    })
}



