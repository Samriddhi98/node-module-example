var log = {
    KbToMb : function (kb) {
        var mb = kb/1024;
        console.log(kb + ' kb equals to '+mb+' mb.');
    }
}

module.exports = log