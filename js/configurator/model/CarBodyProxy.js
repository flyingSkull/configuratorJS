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
     *
     * @type {String}
     */
    this.loadingState = "";

    /**
     * Constructor
     */
    this.initialize = function () {
        console.log("CarBodyProxy::initialize");
        this.parent(CarBodyProxy.NAME, []);
    };

    this.loadCarImages = function(state, configObject){
        this.loadingState = state;
        console.log(configObject.hasOwnProperty("loadingOrderFirstStep"));
        console.log(configObject.loadingOrderFirstStep);
//        this.setImagesForLoading(steps, propertiesArray);
    };

    this.loadCarFirstRun = function () {
        this.loadingState = "firstRun";
    };

    this.loadCarFinalRun = function () {
        this.loadingState = "finalRun";
    };

    this.setImagesForLoading = function (steps, propertiesArray) {

        for( var i=0; i<steps.length; i++)
        {
            console.log(steps[i]);
        }

//        var imageUrls = [];
//        imageUrls[0] = "http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg";
//        imageUrls[1] = "http://www.html5canvastutorials.com/demos/assets/yoda.jpg";
//
//        var bulkLoader = new BulkImageLoader();
//        bulkLoader.initialize(this, imageUrls, result);
//
//        bulkLoader.loadImages();
    };

    function result(images) {
        if (images != null) {
            if (this.loadingState == ApplicationFacade.LOAD_CAR_FIRST_RUN) {
                this.sendNotification(ApplicationFacade.LOAD_CAR_FIRST_RUN_SUCCESS, images);
            } else {
                this.sendNotification(ApplicationFacade.LOAD_CAR_FINAL_RUN_SUCCESS, images);
            }
        }
    }
};

CarBodyProxy = new Class(new CarBodyProxy());
CarBodyProxy.NAME/*String*/ = "CarBodyProxy";
