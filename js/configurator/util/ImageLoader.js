/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 20.01.13
 * Time: 15:06
 * To change this template use File | Settings | File Templates.
 */

var ImageLoader = function (imageUrls) {
    this.imageUrls = imageUrls;
    this.imageArray = null;
    this.loadEvent = null;
};

ImageLoader.prototype = {

    load:function () {
        this.imageArray = new Array();

        for (var i = 0; i < this.imageUrls.length; i++) {
            var imageUrl = this.imageUrls[i];

            console.log("imageUrl: "+imageUrl);

            var image = new Image();
            var loadEvent = this.loadEvent;

            addListener(image, 'load', function (e) {
                if (loadEvent != null) {
                    loadEvent(imageUrl, image);
                }
            }, false);

            image.src = imageUrl;
            this.imageArray.push(image);
        }
    },

    getImageArray:function () {
        return this.imageArray;
    }
};

function addListener(element, type, expression, bubbling) {

    bubbling = bubbling || false;

    if (window.addEventListener) { // Standard
        element.addEventListener(type, expression, bubbling);
        return true;
    } else if (window.attachEvent) { // IE
        element.attachEvent('on' + type, expression);
        return true;
    } else return false;
}