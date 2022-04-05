# Upicity_2
# SELECT & STORE POINTS ON GOOGLE MAP #

-- This code contains a Python Flask App that opens a webpage, displaying a Map from GoogleMaps JavaScript API. --

This choice has been motivated by the fact that Google offers far more key libraries and methods for web applications. 

## HOW TO USE THE APP ## 
Pull the github repository into a local directory, and open a Terminal.. 

>> pip install requirements.txt
>>python3 app.py
These previous steps should work. Notice that this repository is a python virtual environment, take that into account if you run in any type of issue. 

Open a web browser and copy/paste one of the followings : 
- http://127.0.0.1:5000/
- the url that is being prompted in your terminal (after the app.py command)

Now here are some hints on how the app should be used : (follow this link for video demo : https://youtu.be/C7tC7eDLJ8s )
- first type an address in the top searchbar 
- then select two points on the street you selected 
- click on the marker of those points to make their coordinates appear 
- copy and paste the coordinates of the first point in the "Add Points" field 
- same for second point 
- click the 'Add Points' Button

Your set of points is now saved ! 

## DATA LOCATION ##

The coordinates of the points are stored locally on a database file called 'test.db', which is a SQLAlchemy database.
To interact with it  : 
- Open terminal in directory 
>> python3 
A python shell just oppened : 
>> from app import db 
Your database is now imported in your python shell, you can perform any kind of commands on it. See SQLAlchemy documentation for more :
https://docs.sqlalchemy.org/en/14/core/tutorial.html
