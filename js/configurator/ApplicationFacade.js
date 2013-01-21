/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 19.01.13
 * Time: 16:37
 * To change this template use File | Settings | File Templates.
 */
var ApplicationFacade = function () {
    this.Extends = new Class(new Facade());

    this.startup = function (app/*Object*/) {
        this.sendNotification(ApplicationFacade.STARTUP, app);
    }

    this.initializeController = function () {
        // Always call this.parent()
        this.parent();

        this.registerCommand(ApplicationFacade.STARTUP, StartupCommand);
        this.registerCommand(ApplicationFacade.LOAD_CAR_FIRST_RUN, LoadCarFirstRunCommand);
    }
}

// Notification name constants
ApplicationFacade.STARTUP/*String*/ = "startup";
ApplicationFacade.LOAD_CAR_FIRST_RUN/*String*/ = "loadCarFirstRun";
ApplicationFacade.LOAD_CAR_FINAL_RUN/*String*/ = "loadCarFinalRun";

ApplicationFacade.COMPLETE_LOAD_CAR_FIRST_RUN/*String*/ = "completeLoadCarFirstRun";


ApplicationFacade.getInstance = function ()/*ApplicationFacade*/ {
    if (Facade.instance == undefined) {
        var classFactory = new Class(new ApplicationFacade());
        Facade.instance = new classFactory();
    }
    return Facade.instance;
};