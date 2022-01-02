$(function() {

    $('#addBtn').on('click', addListing);
    $('#postBtn').on('click', postListing);
    $('#closeBtn').on('click', closeForm);

    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
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