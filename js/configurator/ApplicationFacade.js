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
    };

    this.initializeController = function () {
        this.parent();

        this.registerCommand(ApplicationFacade.STARTUP, StartupCommand);
        this.registerCommand(ApplicationFacade.LOAD_CONFIG, LoadConfigCommand);

        this.registerCommand(ApplicationFacade.LOAD_CAR_FIRST_RUN, LoadImageCommand);
        this.registerCommand(ApplicationFacade.LOAD_CAR_FINAL_RUN, LoadImageCommand);
        this.registerCommand(ApplicationFacade.LOAD_CHASSI_FIRST_RUN, LoadImageCommand);
        this.registerCommand(ApplicationFacade.LOAD_CHASSI_FINAL_RUN, LoadImageCommand);
    }
};

// Notification name constants
ApplicationFacade.STARTUP/*String*/ = "startup";
ApplicationFacade.LOAD_CONFIG/*String*/ = "loadConfig";
ApplicationFacade.LOAD_CONFIG_SUCCESS/*String*/ = "loadConfigSuccess";

ApplicationFacade.LOAD_CAR_FIRST_RUN/*String*/ = "loadCarFirstRun";
ApplicationFacade.LOAD_CAR_FIRST_RUN_SUCCESS/*String*/ = "loadCarFirstRunSuccess";
ApplicationFacade.LOAD_CAR_FINAL_RUN/*String*/ = "loadCarFinalRun";
ApplicationFacade.LOAD_CAR_FINAL_RUN_SUCCESS/*String*/ = "loadCarFinalRunSuccess";

ApplicationFacade.LOAD_CHASSI_FIRST_RUN/*String*/ = "loadChassiFirstRun";
ApplicationFacade.LOAD_CHASSI_FIRST_RUN_SUCCESS/*String*/ = "loadChassiFirstRunSuccess";
ApplicationFacade.LOAD_CHASSI_FINAL_RUN/*String*/ = "loadChassiFinalRun";
ApplicationFacade.LOAD_CHASSI_FINAL_RUN_SUCCESS/*String*/ = "loadChassiFinalRunSuccess";


ApplicationFacade.getInstance = function ()/*ApplicationFacade*/ {
    if (Facade.instance == undefined) {
        var classFactory = new Class(new ApplicationFacade());
        Facade.instance = new classFactory();
    }
    return Facade.instance;
};