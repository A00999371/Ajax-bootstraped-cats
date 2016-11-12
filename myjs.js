$(document).ready(function(){
    var displayDiv =document.getElementById("display");
    $.ajax({
        url:"info.html",
        dataType:"html",
        success:function(resp){
            console.log(resp);
            displayDiv.innerHTML = resp;
            
            var ban1But = document.getElementById("banner1");
            var tagy1 = document.getElementById("tag1");
            var proBut = document.getElementById("name1");
            var pro1But = document.getElementById("profile1");
            var img3But = document.getElementById("img3");
            var bioy = document.getElementById("bio");
            var page3But = document.getElementById("page3");
            var tagy2 = document.getElementById("tag2");
            var cat1But = document.getElementById("cat1");
            var cat1ty = document.getElementById("cat1t");

            ban1But.onclick = function(){
                tagy1.innerHTML = "Cats live everywhere";
            }

            pro1But.onclick = function(){
                proBut.innerHTML = "My name is prince Pawsalot";
            }

            img3But.onclick = function(){
                bioy.innerHTML = "His life story";
            }

            page3But.onclick = function(){
                tagy2.innerHTML = "This cat looks very comfortable";
            }

            cat1But.onclick = function(){
                cat1ty.innerHTML = "cat";
            }
        }
    });
});