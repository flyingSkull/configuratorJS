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
        this.loadConfigXML();
    };

    this.loadConfigXML = function(){

        console.log("ConfigProxy::loadConfigXML");

        const path = "assets/xml/config.xml";

        var xmlLoader = new XMLLoader();
        xmlLoader.initialize(path, result, this);
        xmlLoader.load();
    };

    function result(configObject, obj) {

        if (configObject instanceof ConfigObject) {

            if (obj != null) {
                obj.getConfigObject().push(configObject);
                obj.sendNotification(ApplicationFacade.LOAD_CONFIG_SUCCESS);
            }
        }
    }

    this.getConfigObject = function () {
        return this.data;
    }
};

ConfigProxy = new Class(new ConfigProxy());
ConfigProxy.NAME/*String*/ = "ConfigProxy";