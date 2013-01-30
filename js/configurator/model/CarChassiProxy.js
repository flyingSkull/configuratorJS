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

    this.loadChassiImages = function (state, configObject) {
        this.loadingState = state;
        if (configObject.hasOwnProperty("loadingOrderFirstStep") && configObject.hasOwnProperty("imagePropertiesArray")) {
            if(this.loadingState == ApplicationFacade.LOAD_CHASSI_FIRST_RUN){
                this.setImagesForLoading(configObject.loadingOrderFirstStep, configObject.imagePropertiesArray);
            }else{
                this.setImagesForLoading(configObject.loadingOrderFinalStep, configObject.imagePropertiesArray);
            }
        }
    };

    this.setImagesForLoading = function (steps, propertiesArray) {

        for (var i = 0; i < steps.length; i++) {
            console.log(this.loadingState+" --> " + propertiesArray[steps[i] - 1]);
        }

        var imageUrls = [];
        imageUrls[0] = "http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg";
        imageUrls[1] = "http://www.html5canvastutorials.com/demos/assets/yoda.jpg";

        var bulkLoader = new BulkImageLoader();
        bulkLoader.initialize(this, imageUrls, result);

        bulkLoader.loadImages();
    };

    function result (images) {
        if (images != null) {
            if (this.loadingState == ApplicationFacade.LOAD_CHASSI_FIRST_RUN) {
                this.sendNotification(ApplicationFacade.LOAD_CHASSI_FIRST_RUN_SUCCESS, images);
            } else {
                this.sendNotification(ApplicationFacade.LOAD_CHASSI_FINAL_RUN_SUCCESS, images);
            }
        }
    }
};

CarChassiProxy = new Class(new CarChassiProxy());
CarChassiProxy.NAME/*String*/ = "CarChassiProxy";
