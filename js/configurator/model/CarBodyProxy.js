/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 20.01.13
 * Time: 13:53
 * To change this template use File | Settings | File Templates.
 */

var CarBodyProxy = function () {

    /**
     * MooTools-Inheritance
     * @type Proxy
     */
    this.Extends = Proxy;

    /**
     * Constructor
     */
    this.initialize = function () {
        console.log("CarBodyProxy::initialize");

        this.parent(CarBodyProxy.NAME, new Array());

        var imageUrls = new Array();
        imageUrls[0] = "http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg";
        imageUrls[1] = "http://www.html5canvastutorials.com/demos/assets/yoda.jpg";

        var bulkLoader = new BulkImageLoader();
        bulkLoader.initialize(imageUrls, result);

        bulkLoader.loadImages();

    }
};

function result(images) {
    for (var i = 0; i < images.length; i++) {
        console.log("images: " + images[i]);
    }
}


CarBodyProxy = new Class(new CarBodyProxy());

CarBodyProxy.NAME/*String*/ = "CarBodyProxy";