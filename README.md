add JavaScript
so that the user can filter breeds that start with a particular letter using a
dropdown.

For example, if the user selects 'a' in the dropdown, only show the breeds with
names that start with the letter a. For simplicity, the dropdown only includes
the letters a-d. However, we can imagine expanding this to include the entire
alphabet

function hideOthers(){
            document.getElementById("dog-breeds").style.display = "none";
            document.getElementById(letter.value).style.display = "none";
        }

document.getElementById("dog-breeds")



prevent default
target - use that for dropdown (value)
starts with 
