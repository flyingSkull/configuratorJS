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

        this.parent(CarBodyProxy.NAME, []);

        var imageUrls = [];
        imageUrls[0] = "http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg";
        imageUrls[1] = "http://www.html5canvastutorials.com/demos/assets/yoda.jpg";

        var bulkLoader = new BulkImageLoader();
        bulkLoader.initialize(imageUrls, result, this);

        bulkLoader.loadImages();
    };

    function result (images, obj) {
        if (images != null && obj != null) {
            obj.sendNotification(ApplicationFacade.COMPLETE_LOAD_CAR_FIRST_RUN, images);
        }
    }
};

CarBodyProxy = new Class(new CarBodyProxy());
CarBodyProxy.NAME/*String*/ = "CarBodyProxy";
