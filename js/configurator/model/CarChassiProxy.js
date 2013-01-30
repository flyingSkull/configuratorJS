/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 20.01.13
 * Time: 13:53
 * To change this template use File | Settings | File Templates.
 */

var CarChassiProxy = function () {

    /**
     * MooTools-Inheritance
     * @type Proxy
     */
    this.Extends = Proxy;

    /**
     *
     * @type {String}
     */
    this.loadingState = "";

    /**
     * Constructor
     */
    this.initialize = function () {
        console.log("CarChassiProxy::initialize");
        this.parent(CarChassiProxy.NAME, []);
    };

    this.loadChassiFirstRun = function() {
        this.loadingState = "firstRun";
        this.setImagesForLoading();
    };

    this.loadChassiFinalRun = function() {
        this.loadingState = "finalRun";
        this.setImagesForLoading();
    };

    this.setImagesForLoading = function (){

        var imageUrls = [];
        imageUrls[0] = "http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg";
        imageUrls[1] = "http://www.html5canvastutorials.com/demos/assets/yoda.jpg";

        var bulkLoader = new BulkImageLoader();
        bulkLoader.initialize(this, imageUrls, result);

        bulkLoader.loadImages();
    };

    function result (images) {
        if (images != null) {
            if (this.loadingState == "firstRun") {
                this.sendNotification(ApplicationFacade.LOAD_CHASSI_FIRST_RUN_SUCCESS, images);
            } else {
                this.sendNotification(ApplicationFacade.LOAD_CHASSI_FINAL_RUN_SUCCESS, images);
            }
        }
    }
};

CarChassiProxy = new Class(new CarChassiProxy());
CarChassiProxy.NAME/*String*/ = "CarChassiProxy";
