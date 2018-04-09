$(document).ready(function() {
    $('form:not(form#search)').each(function() {
        $(this).validate({
            submitHandler: function(form) {
                var clikedForm = $(form);
                var fID = "#" + clikedForm.attr('id')
                console.log(fID);
                if(fID=="#subscribe"){
                    var jData = {"email":jQuery("#fdata").val(),"subsType":101}
                }else if(fID=="#deskhr1") {
                    var jData = {"email": jQuery("#moData1").val(), "subsType": 102}
                }else if(fID=="#mobonly1") {
                    var jData = {"email": jQuery("#moData2").val(), "subsType": 102}
                }else if(fID=="#deskhr2"){
                    var jData = {"email":jQuery("#devdata1").val(),"subsType":103}
                }else if(fID=="#mobonly2"){
                    var jData = {"email":jQuery("#devdata2").val(),"subsType":103}
                }
                    $.ajax(console.log(jQuery("#devdata").val(),jData), {
                                url: "http://159.122.169.245:5000/api/v1/subscription?apiKey=sLLf33UNNgBRBqmOsXBVgBtubT1ynREKdHWH7OYiOxmo6zFkvMbEVlLmbaMwI6wR",
                                type: "POST",
                                dataType: "JSON",
                                contentType: "application/json",
                                data: JSON.stringify(jData),
                                success: function (response) {
                                    console.log(response);
                                    if(response["result"]=="OK"){

                                        console.log(response["msg"]);

                                        $('#id01').hide();
                                        $('#id02').hide();
                                        $('#id03').show();
                                        $('#success-div').text(response["msg"]);
                                        $('#success-divd').text(response["msg"]);


                                    }


                                    else{
                                        console.log("Invalid");
                                        if (fID == '#deskhr1' ) {
                                            $('#moData1c-error').text(response["msg"]);

                                        }
                                        else if (fID == '#mobonly1') {
                                            $('#moData2c-error').text("Email Address Already Registered");

                                        }
                                        else if (fID == '#deskhr2' ) {
                                            $('#devdata1c-error').text("Email Address Already Registered");

                                        }
                                        else if (fID == '#mobonly2') {
                                            $('#devdata2c-error').text("Email Address Already Registered");

                                        }

                                    }
                    }
                });

            },
            rules: {
                field: {
                    required: true,
                    email: true
                }
            }
        });
    });
});