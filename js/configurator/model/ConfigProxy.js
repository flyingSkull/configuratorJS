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

        var xmlLoader = new XMLLoader();
        xmlLoader.initialize("assets/xml/config.xml", result);
        xmlLoader.load();
    };

    function result(firstImageArray, secondImageArray){
        console.log("ConfigProxy::result");
        console.log("ConfigProxy::result::"+firstImageArray.length);
        console.log("ConfigProxy::result::"+secondImageArray.length);
    }
};

ConfigProxy = new Class(new ConfigProxy());
ConfigProxy.NAME/*String*/ = "ConfigProxy";