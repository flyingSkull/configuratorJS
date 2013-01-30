/**
 * Created with JetBrains WebStorm.
 * User: Ric
 * Date: 22.01.13
 * Time: 13:14
 * To change this template use File | Settings | File Templates.
 */
var ConfigProxy = function () {

    /**
     * MooTools-Inheritance
     * @type Proxy
     */
    this.Extends = Proxy;

    /**
     * Constructor
     */
    this.initialize = function () {
        console.log("ConfigProxy::initialize");
        this.parent(ConfigProxy.NAME, []);
    };

    this.loadConfigXML = function(){
        console.log("ConfigProxy::loadConfigXML");
        const path = "assets/xml/config.xml";
        var xmlLoader = new XMLLoader();
        xmlLoader.initialize(this, path, result);
        xmlLoader.load();
    };

    function result(configObject) {
        if (configObject instanceof ConfigObject) {
            this.getConfigObject().push(configObject);
            this.sendNotification(ApplicationFacade.LOAD_CAR_FIRST_RUN);
        }
    }

    this.getConfigObject = function () {
        return this.data;
    }
};

ConfigProxy = new Class(new ConfigProxy());
ConfigProxy.NAME/*String*/ = "ConfigProxy";