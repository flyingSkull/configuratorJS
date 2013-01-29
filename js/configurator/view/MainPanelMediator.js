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

    this.initialize = function(viewComponent){
        console.log("MainPanelMediator::initialize");
        this.parent( MainPanelMediator.NAME, viewComponent );

        this.carBodyProxy = this.facade.retrieveProxy( CarBodyProxy.NAME );
    };


    /**
     * @override
     */
    this.listNotificationInterests = function()/*Array*/
    {
        return [
            ApplicationFacade.LOAD_CONFIG_SUCCESS,
            ApplicationFacade.COMPLETE_LOAD_CAR_FIRST_RUN,
            ApplicationFacade.COMPLETE_LOAD_CAR_FINAL_RUN
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
                console.log("MainPanelMediator::handleNotification: "+ApplicationFacade.LOAD_CONFIG_SUCCESS);
                var configProxy = this.facade.retrieveProxy( ConfigProxy.NAME );
                var configObject = configProxy.getConfigObject();
                this.carBodyProxy.loadCarFirstRun();

                break;

            case ApplicationFacade.COMPLETE_LOAD_CAR_FIRST_RUN:
                console.log("MainPanelMediator::handleNotification: "+ApplicationFacade.COMPLETE_LOAD_CAR_FIRST_RUN);
                console.log("MainPanelMediator::handleNotification: "+note.getBody());
                this.carBodyProxy.loadCarFinalRun();
                break;
        }
    };

};
MainPanelMediator = new Class(new MainPanelMediator());

MainPanelMediator.NAME/*String*/ = "MainPanelMediator";