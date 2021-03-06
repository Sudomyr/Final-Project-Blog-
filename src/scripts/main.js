$(document).ready(function () {
    $.getJSON("/data/data.json", function (data) {
        $('#table-archive').DataTable({
            data: data,
            columns: [
                {data: "No"},
                {data: "Date"},
                {data: "Post title"},
                {data: "By"},
                {data: "Category"},
                {data: "Tags"},
                {data: "Comments"}
            ]
        });
    });
});

$(document).ready(function() {
    $('#form-footer').submit(function() {
        $.ajax({
            type: "GET",
            url: "",
            data: $(this).serialize()
        }).done(function() {
            toastr.success('Thank you for your message! Our manager will contact you for an hour!');
            $("#form-footer").get(0).reset();
        });
        return false;
    });
});

$(document).ready(function() {
    $('#form-subscribe').submit(function() {
        $.ajax({
            type: "GET",
            url: "",
            data: $(this).serialize()
        }).done(function() {
            toastr.success('Thank you for subscribing!');
            $("#form-subscribe").get(0).reset();
        });
        return false;
    });
});

$(document).ready(function() {
    $('#form-call').submit(function() {
        $.ajax({
            type: "GET",
            url: "",
            data: $(this).serialize()
        }).done(function() {
            toastr.success('Thank you for your request! Expect a call!');
            $("#form-call").get(0).reset();
        });
        return false;
    });
});
