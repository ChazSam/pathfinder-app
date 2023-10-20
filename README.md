# pathfinder App
****Pathfinder Character Creator****

Pick a:
-Ancestry
-Background
-Class

Create a character of what you want and save it for later. 

  App
  NavBar
   |--Home--Popup
   |--Ancestry--AncesDesc
   |--Classlist--ClassDesc
   |--Background--BackDesc

The pathfinder app allow the user to create a character, using the RESTful API from Pathfinder 2 API - https://api.pathfinder2.fr/. It lets users create a character based off of the second edition of pathfinder. This MVP allows the user to enter a name, class, ancestry and a background and allows them to save it to the database to be loaded later. 

The main feature of this app is the home page that has a few things on it. On top is a navbar that lets the user to go to a specific page to learn more information about a certain ancestry, class or background of a character that they would like to make. Next, is the character creator, which has for componets: Name, Ancestry, Class and Background. This option allows the user to pick whichever one they want from the dropdown list and save it. Also, the user can load a previously saved character within the database to be changed. It is styled using bootstrap to create a modal component that pops up and lets the user select a previously made character or close the popup. 

The Ancestry, Class and Background pages function relitivly the same. They pull from the api in the database and maps each of the names of each item within. Then the user can click a specific one to go to a decription page with all of the details about what characteristics that their character would be, like if they are a elf, human or half-orc. At the bottom of each item is a save button and a back button. The save button updates the home pages item and take the user back to the home page, while the back button sends them one step back. 