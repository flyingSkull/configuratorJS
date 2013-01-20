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

        this.parent(CarBodyProxy.NAME, new Array());
    }

}
CarBodyProxy = new Class(new CarBodyProxy());

CarBodyProxy.NAME/*String*/ = "CarBodyProxy";