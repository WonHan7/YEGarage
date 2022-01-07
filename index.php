<!DOCTYPE html>
<html lang="en">
<head>

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="script.js"></script>
    <script async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9875092468157774"
        crossorigin="anonymous">
    </script>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>YEGarage - Find Garage Sales in Edmonton</title>

</head>
<body>

    <nav>
        <a href="contact.html"><span class="logo"><h2 class="logo-orange">YEG</h2><h2>arage</h2></span></a>
        <div class="buttons">
            <button id="filter"><i class="fas fa-filter"></i>Filter</button>
            <button id="addBtn" class="add-btn">Add Garage Sale</button>
        </div>
    </nav>
    
    <div id="site">
        <div id="wrapper">

            <div id="map"></div>
                
            <div id="listing">
                <div id="results">
                    <h2>Results</h2>
                    <label>(0)</label>
                </div>
                <div id="post">
                    <!-- Where posts go -->                    
                    <?php

                        include "db_dispAll.php";

                        $mysqli->close();

                    ?>
                </div>
            </div>

        </div>
    </div>

    <!-- Popup Filter -->
    <div id="myFilter" class="filter-popup">
        <form action="db_filter_category.php" method="GET" class="form-container">
            <h3 class="center">Filter by Category</h3>

            <div class="form-spacing check-center">
                <label>
                    <input type="checkbox" name="category[]" value="Books">
                    Books
                </label><br>
                
                <label>
                    <input type="checkbox" name="category[]" value="Video Games">
                    Video Games
                </label><br>
                
                <label>
                    <input type="checkbox" name="category[]" value="Electronics">
                    Electronics
                </label><br>
                
                <label>
                    <input type="checkbox" name="category[]" value="Home Tools">
                    Home, Garden, Pets & Tools
                </label><br>
                
                <label>
                    <input type="checkbox" name="category[]" value="Toys">
                    Toys
                </label><br>
                
                <label>
                    <input type="checkbox" name="category[]" value="Cloths">
                    Clothing, Shoes & Jewelry
                </label><br>
                
                <label>
                    <input type="checkbox" name="category[]" value="Sports">
                    Sports & Outdoors
                </label><br>
                
                <label>
                    <input type="checkbox" name="category[]" value="Automobile">
                    Automotive & Industrial
                </label><br>
                
                <label>
                    <input type="checkbox" name="category[]" value="Hidden">
                    Hidden Gems & Treasures
                </label><br>
            </div>            

            <button type="submit" id="searchBtn" class="btn post" value="submit">Filter</button>
            <button type="button" id="closeFilter" class="btn cancel">Close</button>
        </form>
    </div>

    <!-- Popup Form -->
    <div id="myForm" class="form-popup">
        <form action="add_listing.php" class="form-container">
            <h3 id="form-header" class="center">***ALL LISTINGS WILL AUTOMATICALLY BE REMOVED AFTER THE END DATE***</h3>
        
            <div id="form-address" class="form-header">
                <label for="address"><b>Address*</b></label>
                <input type="text" placeholder="Enter Address" name="address" required>
            </div>

            <div id="form-images" class="form-spacing">
                <label for="images"><b>Image (PNG or JPEG)</b></label><br>
                <input type="file" name="images" accept="image/png, image/jpeg">
            </div>
        
            <div class="form-spacing form-inside-spacing">
                <label for="sdate"><b>Start Date*</b></label>
                <label for="edate" id="edate-label"><b>End Date*</b></label>
            </div>
        
            <div id="form-date-input" class="form-spacing form-inside-spacing">
                <input type="date" name="sdate" class="start-input" required>
                <input type="date" name="edate" class="end-input" required>
            </div>
            
            <div class="form-spacing form-inside-spacing">
                <label for="stime"><b>Start Time*</b></label>
                <label for="etime" id="etime-label"><b>End Time*</b></label>
            </div>

            <div id="form-time-input" class="form-spacing form-inside-spacing">
                <input type="time" name="stime" class="start-input" required>
                <input type="time" name="etime" class="end-input" required>
            </div>

            <div id="form-category" class="form-spacing">
                <label for="category"><b>Category</b></label><br>
                <label>
                    <input type="checkbox" name="Books" value="Books">
                    Books
                </label><br>
                
                <label>
                    <input type="checkbox" name="Video Games" value="Video Games">
                    Video Games
                </label><br>
                
                <label>
                    <input type="checkbox" name="Electronics" value="Electronics">
                    Electronics
                </label><br>
                
                <label>
                    <input type="checkbox" name="Home Tools" value="Home Tools">
                    Home, Garden, Pets & Tools
                </label><br>
                
                <label>
                    <input type="checkbox" name="Toys" value="Toys">
                    Toys
                </label><br>
                
                <label>
                    <input type="checkbox" name="Cloths" value="Cloths">
                    Clothing, Shoes & Jewelry
                </label><br>
                
                <label>
                    <input type="checkbox" name="Sports" value="Sports">
                    Sports & Outdoors
                </label><br>
                
                <label>
                    <input type="checkbox" name="Automobile" value="Automobile">
                    Automotive & Industrial
                </label><br>
                
                <label>
                    <input type="checkbox" name="Hidden" value="Hidden">
                    Hidden Gems & Treasures
                </label><br>
            </div>            
        
            <button type="submit" id="postBtn" class="btn post" value="submit">Post</button>
            <button type="button" id="closeAdd" class="btn cancel">Close</button>
        </form>
    </div>

    <script async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBUUfivu0O21qha3WUsUy5CK8359LcVyQ8&callback=initMap">
    </script>

</body>
</html>