var val = true;

$(function() {

    alert("Thank you for visiting YEGarage.com! This website is still a work in-progress.");
    $('#addBtn').on('click', openForm);
    $('#closeAdd').on('click', closeForm);
    $('#postBtn').on('click', validateForm);
    $('#filter').on('click', openFilter);
    $('#closeFilter').on('click', closeFilter);

    const edmonton = { lat: 53.533, lng: -113.506 };

    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: edmonton,
    });

})

function openForm ()
{
    $('#myForm').css("display", "grid");
}

function closeForm ()
{    
    $('#myForm').css("display", "none");
}

function openFilter ()
{    
    $('#myFilter').css("display", "block");
}

function closeFilter ()
{    
    $('#myFilter').css("display", "none");
}

function postListing ()
{
    let arr = [];
    let addr = $('input[name=address]').val();
    let pic = $('input[name=images]').val();
    let sdate = $('input[name=sdate]').val();
    let edate = $('input[name=edate]').val();
    let time = $('input[name=time]').val();
    let check = $('input[type=checkbox]:checked');

    // Post Formatting - Add Google Maps Pin
    let div = document.createElement('div');
    div.classList.add("post-wrapper");
    let inner = document.createElement('div');
    inner.classList.add("post-info");
    let img = document.createElement('img');
    img.classList.add("post-img");
    let addy = document.createElement('h2');
    let span = document.createElement('span');
    span.classList.add("post-info-wrapper");
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    p1.appendChild(document.createTextNode("Date: " + sdate + " ~ " + edate));
    p2.appendChild(document.createTextNode("Time: " + time));   //Change to 12 hour format with AM/PM
    
    for (let i = 0; i < check.length; i++) {
        if (i == check.length-1)
        {
            arr += check[i].name;
        }
        else 
        {            
            arr += check[i].name + ", ";
        }
    }
    p3.appendChild(document.createTextNode("Category: " + arr));

    inner.append(p1);
    inner.append(p2);
    inner.append(p3);

    img.src = pic;

    span.append(img);
    span.append(inner);

    addy.appendChild(document.createTextNode(addr));

    div.append(addy);
    div.append(span);
    $('#post').append(div);

    //Use address to create Google Pin
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({
       'address': addr
    }, 
    function(results, status) {
       if(status == google.maps.GeocoderStatus.OK) {
          new google.maps.Marker({
             position: results[0].geometry.location,
             map: map
          });
          map.setCenter(results[0].geometry.location);
       }
    });
}

function validateForm ()
{
    let addr = $('input[name=address]').val();
    let sdate = $('input[name=sdate]').val();
    let edate = $('input[name=edate]').val();
    let time = $('input[name=time]').val();

    if (addr == "")
    {
        val = false;
    }
    if (sdate == "")
    {
        val = false;
    }
    if (edate == "")
    {
        val = false;
    }
    // Users can technically choose 1 out of the 3 sections and hit post
    if (time == "")
    {
        val = false;
    }

    if (val)
    {
        postListing();
    }
    else
    {
        alert("Please fill out all required fields!");
    }
}