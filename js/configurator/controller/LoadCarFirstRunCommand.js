/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 19.01.13
 * Time: 16:55
 * To change this template use File | Settings | File Templates.
 */

var LoadCarFirstRunCommand = function () {
    this.Extends = SimpleCommand;

    this.execute = function (notification/*INotification*/) {
        console.log("LoadCarFirstRunCommand::execute");
    }
}
LoadCarFirstRunCommand = new Class(new LoadCarFirstRunCommand());