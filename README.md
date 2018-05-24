# movie_search
This is a simple Web App that allows you to type in any part of the movie title and it return a list of movies in sorted order.  You can then run your mouse over the title of the movies and a poster of that movie will pop up next to it.  The Public API I'm using is a rest service from http://www.omdbapi.com/.  I've noticed that the service only returns 10 results of the total and allows you to page through the results, but I've not been able to place a request that will sort the results BEFORE sending back the 10.  Therefore, I can only sort the 10 results that have come back.

Set up...
1.  Make sure you have at least version v8.11.2 Node.js from https://nodejs.org/en/ installed
2.  To start up Node.js go to a command prompt in the movie_search root directory and type 'node server'
3.  In a Browser, go to the the URL http://localhost:3000/
4.  Type in the movie you want to look for and either hit 'Search' or enter.

