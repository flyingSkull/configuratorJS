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
        this.parent(CarBodyProxy.NAME, []);
    };

    this.loadCarFirstRun = function() {
        this.setImagesForLoading();
    };

    this.setImagesForLoading = function (){
        console.log("CarBodyProxy::setImagesForLoading");

        var imageUrls = [];
        imageUrls[0] = "http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg";
        imageUrls[1] = "http://www.html5canvastutorials.com/demos/assets/yoda.jpg";

        var bulkLoader = new BulkImageLoader();
        bulkLoader.initialize(this, imageUrls, result);

        bulkLoader.loadImages();
    };

    function result (images) {

        if (images != null) {
            this.sendNotification(ApplicationFacade.COMPLETE_LOAD_CAR_FIRST_RUN, images);
        }
    }
};

CarBodyProxy = new Class(new CarBodyProxy());
CarBodyProxy.NAME/*String*/ = "CarBodyProxy";
