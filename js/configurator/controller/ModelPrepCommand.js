/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 20.01.13
 * Time: 13:59
 * To change this template use File | Settings | File Templates.
 */
var ModelPrepCommand = function () {

    this.Extends = SimpleCommand;

    this.execute = function (notification/*INotification*/) {
        console.log("ModelPrepCommand::execute");

        this.facade.registerProxy(new CarBodyProxy());
    }
}
ModelPrepCommand = new Class(new ModelPrepCommand());