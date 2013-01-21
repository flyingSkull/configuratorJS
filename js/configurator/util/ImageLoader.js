/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 20.01.13
 * Time: 15:06
 * To change this template use File | Settings | File Templates.
 */
/**
 * A simple JavaScript image loaderimage loader
 * @author Cuong Tham
 * @url http://thecodecentral.com/2008/02/21/a-useful-javascript-image-loader
 * @usage
 *
 * var loader = new ImageLoader('IMAGE_URL');
 * //set event handler
 * loader.loadEvent = function(url, image){
 *   //action to perform when the image is loaded
 *   document.body.appendChild(image);
 * }
 * loader.load();
 */

//source: http://snipplr.com/view.php?codeview&id=561
// Cross-browser implementation of element.addEventListener()

var ImageLoader = function (images) {
    this.images = images;

    for (var Image in images) {
        console.log(Image);
    }

    this.url = url;
    this.image = null;
    this.loadEvent = null;
};

ImageLoader.prototype = {

    load:function () {
//        this.image = document.createElement('img');
        this.image = new Image();

        var url = this.url;
        var image = this.image;
        var loadEvent = this.loadEvent;

        addListener(this.image, 'load', function (e) {
            if (loadEvent != null) {
                loadEvent(url, image);
            }
        }, false);

        this.image.src = this.url;
    },

    getImage:function () {
        return this.image;
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