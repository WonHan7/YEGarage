$(function() {

    $('#addBtn').on('click', addListing);
    $('#postBtn').on('click', postListing);
    $('#closeBtn').on('click', closeForm);

    const edmonton = { lat: 53.533, lng: -113.506 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: edmonton,
    });
    
})

function addListing ()
{
    $('#myForm').css("display", "block");
}

function postListing ()
{
    let addr = $('input[name=address]').val();
    let date = $('input[name=date]').val();
    let time = $('input[name=time]').val();
    // let category = $('input[name=date]').val();
    let div = document.createElement('div');

    

}

function closeForm ()
{    
    $('#myForm').css("display", "none");
}