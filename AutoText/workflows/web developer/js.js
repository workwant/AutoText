var list={
	"[for]":"for (var i=0;i<str.length;i++){ \r\n  \r\n}",
    "[div]":"<div id=\"\" class=\"\" style=\"\"></div>",
	"[email]":"bing@alovez.com",
	"[profile]":"https://alovez.com/@bing",
	now:function(){
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
	}
	};

function start(str){
	
	for(var x in list){
	

	str=str.replace(x,list[x]);
	}

return str;
	


	
};

function re_all(str, a, b) {
        var reg = new RegExp(a, "g");
return str.replace(reg, b);
};