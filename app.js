#!/usr/bin/env node
/**
 * This script takes a single parameter - directory - and then recursively searches
 * for `build` directories, which it will remove
 *
 * @author Bert Grantges
 *
 * @license Please feel free to use this however you like - but just be careful.
 *
 * @warning This is dev script. I take no resposibility for it wiping your hard drive do
 *          to weirdness.
 */


 var fs = require('fs'),
      rm = require('rimraf');

 function searchAndDestroy(_dir){

   fs.readdir(_dir, function(err, files){

     files.forEach(function(fileName){

       var path = _dir+"/"+fileName;

       fs.stat(path, function(err,stat){

         if(stat && stat.isDirectory()){

           if(fileName === 'build'){
             rm(path, function(err){

               if(err){
                 console.log(err);
                 return;
               }

               console.log('CLEANING --> '+path);
             })
           }
           else{

             if(fileName !=='node_modules' && fileName !=='modules'){
               searchAndDestroy(path);
             }
           }
         }
       });
     })
   });
 }


 /** Check to make sure the user enters in a directory **/
 if(process.argv && process.argv.length <3){

   console.log("Oops - you didn't enter a directory to search. Try Again.");
   return;

 }
 else {
   fs.stat(process.argv[2], function(err, stats){

      if(stats.isDirectory()){
        console.log("Searching through your directory - this could take a few...");
        searchAndDestroy(process.argv[2]);
      }
      else {
        console.log("Oops - the path you entered was not a directory. Try Again.");
        return;
      }

   });
 }
