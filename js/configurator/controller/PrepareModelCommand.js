/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 20.01.13
 * Time: 13:59
 * To change this template use File | Settings | File Templates.
 */
var PrepareModelCommand = function () {

    this.Extends = SimpleCommand;

    this.execute = function (notification/*INotification*/)
    {
        console.log("PrepareModelCommand::execute");

        this.facade.registerProxy(new CarBodyProxy());
        this.facade.registerProxy(new CarChassiProxy());
        this.facade.registerProxy(new ConfigProxy());
    }
}
PrepareModelCommand = new Class(new PrepareModelCommand());