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

//        const path = "http://localhost/config.xml";
        const path = "assets/xml/config.xml";

        this.parent(ConfigProxy.NAME, []);

        var xmlLoader = new XMLLoader();
        xmlLoader.initialize(path, result);
        xmlLoader.load();
    };

    function result(configObject) {
        if (configObject instanceof ConfigObject) {
            console.log("ConfigProxy::result:" +  configObject.blurXFrom);
            console.log("ConfigProxy::result:" +  configObject.imageHost);

            this.getConfigObject.push( configObject );
        }
    }

    this.getConfigObject = function(){
        return this.data;
    }
};

ConfigProxy = new Class(new ConfigProxy());
ConfigProxy.NAME/*String*/ = "ConfigProxy";