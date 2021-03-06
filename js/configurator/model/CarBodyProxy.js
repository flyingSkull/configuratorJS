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
     *
     * @type {Array}
     */
    this.pictureCategorie = ["body_", "diffusion.VRayDiffuseFilter.", "reflection.VRayReflection.", "logo_fo_", "bottom_", "shadow_"];

    /**
     * Constructor
     */
    this.initialize = function () {
        console.log("CarBodyProxy::initialize");
        this.parent(CarBodyProxy.NAME, []);
    };

    this.loadCarImages = function (state, configObject) {
        this.loadingState = state;
        if (configObject.hasOwnProperty("loadingOrderFirstStep") && configObject.hasOwnProperty("imagePropertiesArray")) {
            if(this.loadingState == ApplicationFacade.LOAD_CAR_FIRST_RUN){
                this.setImagesForLoading(configObject.loadingOrderFirstStep, configObject.imagePropertiesArray);
            }else{
                this.setImagesForLoading(configObject.loadingOrderFinalStep, configObject.imagePropertiesArray);
            }
        }
    };

    this.setImagesForLoading = function (steps, propertiesArray) {

        var imageUrls = [];
        for (var i = 0; i < steps.length; i++) {
            for (var p = 0; p < this.pictureCategorie.length; p++) {
                imageUrls.push("http://www.doppellotte.de/ric/configurator/images/configurator/vehicle/7/1/medium/"+this.pictureCategorie[p]+propertiesArray[steps[i] - 1]+".png");
            }
        }

        var bulkLoader = new BulkImageLoader();
        bulkLoader.initialize(this, imageUrls, result);
        bulkLoader.loadImages();
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
