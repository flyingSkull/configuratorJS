/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 20.01.13
 * Time: 14:05
 * To change this template use File | Settings | File Templates.
 */

var CarChassiProxy = function () {
    this.Extends = Proxy;

    /**
     * Constructor
     */
    this.initialize = function () {
        this.parent(CarChassiProxy.NAME, new Array());
    }

}
CarChassiProxy = new Class(new CarChassiProxy());

CarChassiProxy.NAME/*String*/ = "CarChassiProxy";