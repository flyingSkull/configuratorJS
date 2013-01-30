/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 21.01.13
 * Time: 21:41
 * To change this template use File | Settings | File Templates.
 */

var MainPanelMediator = function( viewComponent/*Object*/ )
{
    /**
     * Required by MooTools for inheritance.
     * @type Class
     */
    this.Extends = Mediator;

    this.carBodyProxy/*CarBodyProxy*/ = null;
    this.configProxy/*ConfigProxy*/ = null;

    this.initialize = function(viewComponent){
        console.log("MainPanelMediator::initialize");
        this.parent( MainPanelMediator.NAME, viewComponent );

        this.carBodyProxy = this.facade.retrieveProxy( CarBodyProxy.NAME );

        this.configProxy = this.facade.retrieveProxy( ConfigProxy.NAME );
        this.configProxy.loadConfigXML();

    };


    /**
     * @override
     */
    this.listNotificationInterests = function()/*Array*/
    {
        return [
            ApplicationFacade.LOAD_CONFIG_SUCCESS,
            ApplicationFacade.LOAD_CAR_FIRST_RUN_SUCCESS,
            ApplicationFacade.LOAD_CAR_FINAL_RUN_SUCCESS,
            ApplicationFacade.LOAD_CHASSI_FIRST_RUN_SUCCESS,
            ApplicationFacade.LOAD_CHASSI_FINAL_RUN_SUCCESS
        ];
    };
    /**
     * @override
     */
    this.handleNotification = function( note/*INotification*/ )
    {
        switch( note.getName() )
        {
            case ApplicationFacade.LOAD_CONFIG_SUCCESS:
                console.log("# MainPanelMediator::handleNotification: "+ApplicationFacade.LOAD_CONFIG_SUCCESS);
                break;

            case ApplicationFacade.LOAD_CAR_FIRST_RUN_SUCCESS:
                console.log("# MainPanelMediator::handleNotification: "+ApplicationFacade.LOAD_CAR_FIRST_RUN_SUCCESS);
                this.sendNotification(ApplicationFacade.LOAD_CHASSI_FIRST_RUN);
                break;

            case ApplicationFacade.LOAD_CHASSI_FIRST_RUN_SUCCESS:
                console.log("# MainPanelMediator::handleNotification: "+ApplicationFacade.LOAD_CHASSI_FIRST_RUN_SUCCESS);
                this.sendNotification(ApplicationFacade.LOAD_CAR_FINAL_RUN);
                break;

            case ApplicationFacade.LOAD_CAR_FINAL_RUN_SUCCESS:
                console.log("# MainPanelMediator::handleNotification: "+ApplicationFacade.LOAD_CAR_FINAL_RUN_SUCCESS);
                this.sendNotification(ApplicationFacade.LOAD_CHASSI_FINAL_RUN);
                break;

            case ApplicationFacade.LOAD_CHASSI_FINAL_RUN_SUCCESS:
                console.log("# MainPanelMediator::handleNotification: "+ApplicationFacade.LOAD_CHASSI_FINAL_RUN_SUCCESS);
                break;
        }
    };

};
MainPanelMediator = new Class(new MainPanelMediator());
MainPanelMediator.NAME/*String*/ = "MainPanelMediator";