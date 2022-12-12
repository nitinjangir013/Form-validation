var email_match_text = ["@gmail.com","@yahoo.com"];
var email_space= false;
var pass_result_num=false;
$("#gmail_input")
.on('change',function()
{
	var email_string = $("#gmail_input").val();
	var gmailLength = $("#gmail_input").val().length;
	var value1 = gmailLength-10;
	var  slice_email = email_string.slice(value1,gmailLength);
	$("#right").css('opacity','1')
	for(let i=0; i<gmailLength; i++)
	{
		if(email_string[i]!=" ")
		{
			email_space = true;
			$("#error_gmail").empty();
			$("#right").attr('src','https://i.postimg.cc/05CFNy4R/right.png');
		}
		else
		{
			email_space=false;
			$("#error_gmail").empty().append('Enter email address correctly').css("color","red");
			$("#right").attr('src','https://i.postimg.cc/6q6HZCPs/wrong.png');
		}
	}

	if(email_space==true)
	{
		if(email_match_text[0]===slice_email || email_match_text[1]===slice_email)
		{
			email_result_num = true;
			$("#error_gmail").empty();
			$("#right").attr('src','https://i.postimg.cc/05CFNy4R/right.png');
		}
		else
		{
			email_result_num = false;
			$("#error_gmail").empty().append('Enter email address correctly').css("color","red");
			$("#right").attr('src','https://i.postimg.cc/6q6HZCPs/wrong.png');
		}
	}
});


$("#password_input")
.on('input',function() 
{
    var pass_str = $("#password_input").val();
	if(pass_str.length<=2)
	{
		pass_result_num=true;
		$(".current_status:nth-child(1)").css("background","red");
		$(".current_status:nth-child(2)").css("background","grey");
		$(".current_status:nth-child(3)").css("background","grey");
		$(".current_status:nth-child(4)").css("background","grey");

		$("#status_name").empty().append('Very weak').css("color","red");
	}
	else if(pass_str.length>2 && pass_str.length<=4)
	{
		pass_result_num=true;
		$(".current_status:nth-child(1)").css("background","orange");
		$(".current_status:nth-child(2)").css("background","orange");
		$(".current_status:nth-child(3)").css("background","grey");
		$(".current_status:nth-child(4)").css("background","grey");

		$("#status_name").empty().append('so-so').css("color","orange");
	}
	else if(pass_str.length>4 && pass_str.length<=6)
	{
		pass_result_num=true;
		$(".current_status:nth-child(1)").css("background","lightgreen");
		$(".current_status:nth-child(2)").css("background","lightgreen");
		$(".current_status:nth-child(3)").css("background","lightgreen");
		$(".current_status:nth-child(4)").css("background","grey");

		$("#status_name").empty().append('Good').css("color","lightgreen");
	}
	else if(pass_str.length>6)
	{
		pass_result_num=true;
		$(".current_status").css("background","green");

		$("#status_name").empty().append('Great').css("color","green");
	}
	else
	{
		pass_result_num=false;
		$(".current_status").css("background","grey");

		$("#status_name").empty().append('Very weak').css("color","red");
	}
});