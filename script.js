var val = true;

$(function() {

    alert("Thank you for visiting YEGarage.com! This website is still a work in-progress.");
    $('#addBtn').on('click', addListing);
    $('#postBtn').on('click', Validate);
    $('#closeBtn').on('click', closeForm);

    const edmonton = { lat: 53.533, lng: -113.506 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: edmonton,
    });
    
})

function addListing ()
{
    $('#myForm').css("display", "block");
}

function postListing ()
{
    let arr = [];
    let addr = $('input[name=address]').val();
    let pic = $('input[name=images]').val();
    let sdate = $('input[name=sdate]').val();
    let edate = $('input[name=edate]').val();
    let stime = $('input[name=stime]').val();
    let etime = $('input[name=etime]').val();
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
    p2.appendChild(document.createTextNode("Time: " + stime + " ~ " + etime));   //Change to 12 hour format with AM/PM
    
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

function closeForm ()
{    
    $('#myForm').css("display", "none");
}

function Validate ()
{
    let addr = $('input[name=address]').val();
    let sdate = $('input[name=sdate]').val();
    let edate = $('input[name=edate]').val();
    let stime = $('input[name=time]').val();
    let etime = $('input[name=time]').val();

    if (addr == "")
    {
        val = false;
    }
    if ((sdate == "") || (edate == ""))
    {
        val = false;
    }
    if ((stime == "") || (etime == ""))
    {
        val = false;
    }

    if (val == true)
    {
        postListing();
    }
}