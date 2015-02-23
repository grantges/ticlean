
Do you have a lot of lingering Titanium projects with space hogging build folders?

Do you wish you could easily clean up an entire workspace (outside of studio)?

Then _ticlean_ is for you!

TiClean
=======

A simple script that allows you to easily remove all of the build directories across multiple Appcelerator Titanium project directories.

The script takes one parameter - a folder path - and then recursively searches that folder for Titanium Project directories and removes any build files. The script is also smart enough to leave node_modules and ti modules alone.


Install
-------

~~~
npm install ticlean
~~~

Usage
-----

~~~
ticlean <PATH TO TOP LEVEL FOLDER FOLDER>
~~~
