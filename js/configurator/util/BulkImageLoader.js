/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 21.01.13
 * Time: 17:47
 * To change this template use File | Settings | File Templates.
 */

var imagesLoaded = new Number(0);
var images = new Array();
var imageUrls = null;
var callback = null;


var BulkImageLoader = function () {

    this.initialize = function (givenImageUrls, givenCallback) {
        imageUrls = givenImageUrls;
        callback = givenCallback;
    }

    this.loadImages = function(){
        for(var i=0; i<imageUrls.length; i++){
            images.push(loadImage(imageUrls[i]));
        }
    }
}

function loadImage(url)
{
    var image = new Image();
    image.addEventListener("load", imageLoaded, false);
    image.src = url;
    return image;
}

function imageLoaded()
{
    imagesLoaded++;
    console.log(imagesLoaded);

    if (imagesLoaded == imageUrls.length){
        if(callback != null){
            callback(images);
        }
    }
}
