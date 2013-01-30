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
        console.log("LoadCarFirstRunCommand::execute: "+notification.getName());

        var configProxy = this.facade.retrieveProxy( ConfigProxy.NAME );
        var configObject = configProxy.getConfigObject();

        var carBodyProxy = this.facade.retrieveProxy( CarBodyProxy.NAME );
        var carChassiProxy = this.facade.retrieveProxy( CarChassiProxy.NAME );

        switch( notification.getName() )
        {
            case ApplicationFacade.LOAD_CAR_FIRST_RUN:
                carBodyProxy.loadCarFirstRun();
                break;
            case ApplicationFacade.LOAD_CAR_FINAL_RUN:
                carBodyProxy.loadCarFinalRun();
                break;
            case ApplicationFacade.LOAD_CHASSI_FIRST_RUN:
                carChassiProxy.loadChassiFirstRun();
                break;
            case ApplicationFacade.LOAD_CHASSI_FINAL_RUN:
                carChassiProxy.loadChassiFinalRun();
                break;
        }
    }
};
LoadImageCommand = new Class(new LoadImageCommand());