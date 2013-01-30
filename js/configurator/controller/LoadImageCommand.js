/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 19.01.13
 * Time: 16:55
 * To change this template use File | Settings | File Templates.
 */

var LoadImageCommand = function () {
    this.Extends = SimpleCommand;

    this.execute = function (notification/*INotification*/) {
        console.log("LoadImageCommand::execute: " + notification.getName());

        var configProxy = this.facade.retrieveProxy(ConfigProxy.NAME);
        var configObject = configProxy.getConfigObject()[0];

        var carBodyProxy = this.facade.retrieveProxy(CarBodyProxy.NAME);
        var carChassiProxy = this.facade.retrieveProxy(CarChassiProxy.NAME);

        if (notification.getName() == ApplicationFacade.LOAD_CAR_FIRST_RUN
            || notification.getName() == ApplicationFacade.LOAD_CAR_FINAL_RUN) {
            carBodyProxy.loadCarImages(notification.getName(), configObject);
        } else {
            carChassiProxy.loadChassiImages(notification.getName(), configObject);
        }
    }
};
LoadImageCommand = new Class(new LoadImageCommand());