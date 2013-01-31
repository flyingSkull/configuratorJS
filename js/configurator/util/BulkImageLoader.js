/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 21.01.13
 * Time: 17:47
 * To change this template use File | Settings | File Templates.
 */

function BulkImageLoader() {

    var imagesLoaded = Number(0);
    var images = [];
    var parentObj = null;
    var imageUrls = null;
    var callback = null;

    this.initialize = function (parent, givenImageUrls, givenCallback) {
        parentObj = parent;
        imageUrls = givenImageUrls;
        callback = givenCallback;
    };

    this.loadImages = function () {
        for (var i = 0; i < imageUrls.length; i++) {
            images.push(loadImage(imageUrls[i]));
        }
    };

    /* private */
    function loadImage(url) {
        console.log("--> load url: "+url);
        var image = new Image();
        image.addEventListener("load", imageLoaded, false);
        image.src = url;
        return image;
    }

    function imageLoaded() {
        imagesLoaded++;

        if (imagesLoaded == imageUrls.length) {
            if (callback != null) {
                callback.call(parentObj, images);
            }
        }
    }
}

