/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 19.01.13
 * Time: 16:45
 * To change this template use File | Settings | File Templates.
 */

var StartupCommand = function () {
    this.Extends = MacroCommand;

    this.initializeMacroCommand = function (note/*INotification*/) {

        console.log("StartupCommand::initializeMacroCommand");
        this.addSubCommand(PrepareModelCommand);
        this.addSubCommand(PrepareViewCommand);

        this.addSubCommand(LoadConfigCommand);
    }
};

StartupCommand = new Class(new StartupCommand());
