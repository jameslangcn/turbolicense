$.fn.signup = function () {
	var urlStr = "@root@/CommonAjax";
	var para = {};
	para["function"] = "signup";
	para["username"] = $("#username").val();
	para["password1"] = $("#password1").val();
	para["password2"] = $("#password2").val();
	para["email"] = $("#email").val();
	para["f_name"] = $("#f_name").val();
	para["l_name"] = $("#l_name").val();
	$.ajax({
		url: urlStr,
		data: para,
		async: false,
		cache: false,
		success: function(data){
			var success = $(data).find("response").attr("success");
			if (success == "1") {
				$("#SignupBlock").hide();
				$("#MsgBlock").show();
				return false;
			} else {
				alert($(data).find("response").attr("errmsg"));
				return false;
			}
		}
	});
}

$(document).ready(function () {
	$("#MsgBlock").hide();
});