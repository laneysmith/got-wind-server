module.exports = {

  Date.prototype.YYYYMMDD = function() {

    var date = new Date();
    var day = (date.getDate()).toString();
    var DD = !day[1] ? "0" + day : day;
    var month = (date.getMonth() + 1).toString();
    var MM = !month[1] ? "0" + month : month;
    var YYYY = this.getFullYear();

    var date2 = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var day2 = (date2.getDate()).toString();
    var DD2 = !day2[1] ? "0" + day2 : day2;
    var month2 = (date2.getMonth() + 1).toString();
    var MM2 = !month2[1] ? "0" + month2 : month2;
    var YYYY2 = (date2.getFullYear()).toString();

    return [[YYYY, MM, DD].join("-"), [YYYY2, MM2, DD2].join("-")];

  };

}
