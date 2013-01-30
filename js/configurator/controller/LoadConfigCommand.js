/**
 * Created with JetBrains WebStorm.
 * User: Ric
 * Date: 22.01.13
 * Time: 12:07
 * To change this template use File | Settings | File Templates.
 */
var LoadConfigCommand = function () {

    this.Extends = SimpleCommand;

    this.execute = function (notification/*INotification*/) {
        console.log("LoadConfigCommand::execute");

        this.facade.registerProxy(new ConfigProxy());
    };
};
LoadConfigCommand = new Class(new LoadConfigCommand());