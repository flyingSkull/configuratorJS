/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 20.01.13
 * Time: 14:06
 * To change this template use File | Settings | File Templates.
 */

var CarColorProxy = function () {
    this.Extends = Proxy;

    /**
     * Constructor
     */
    this.initialize = function () {
        this.parent(CarColorProxy.NAME, new Array());
    }

}
CarColorProxy = new Class(new CarColorProxy());

CarColorProxy.NAME/*String*/ = "CarColorProxy";