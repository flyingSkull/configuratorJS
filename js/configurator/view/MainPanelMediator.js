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
    /**
     * @override
     */
    this.listNotificationInterests = function()/*Array*/
    {
        return [
            ApplicationFacade.COMPLETE_LOAD_CAR_FIRST_RUN
        ];
    }
    /**
     * @override
     */
    this.handleNotification = function( note/*INotification*/ )
    {
        switch( note.getName() )
        {
            case ApplicationFacade.COMPLETE_LOAD_CAR_FIRST_RUN:
                console.log("handleNotification: "+ApplicationFacade.COMPLETE_LOAD_CAR_FIRST_RUN);
                break;
        }
    }
}
MainPanelMediator = new Class(new MainPanelMediator());

MainPanelMediator.NAME/*String*/ = "MainPanelMediator";