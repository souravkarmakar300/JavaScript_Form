$(document).ready(function () {
    $("#submitbtn").click(function (e) {
        e.preventDefault();

        let x = $("#Name").val();

        if (x === "") {
            $("#Name").addClass("is-invalid");
        } else if (x !== "") {
            $("#Name").removeClass("is-invalid");
            
            $(this).html(`<div class="spinner-border" role="status">
<span class="visually-hidden"></span>
</div>Loading...`);
            setTimeout(() => {
                $(this).html("Submit");
                $("#userdata").append(`<tr>
                <td>${x}</td>
                <td>${$("#Email").val()}</td>
                <td>${$("#Password").val()}</td>
                <td><button class="btn btn-danger deletebtn">Delete</button></td>
                </tr>`);
                $("#userform")[0].reset();
            }, 1000);
        }
    });
    $("#userdata").on("click", ".deletebtn",function(){
        $(this).parent().parent().remove();
    });
    $("#resetbtn").click(function(){
        $("#userform")[0].reset();
    });
}
)