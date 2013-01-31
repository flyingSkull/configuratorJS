/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 21.01.13
 * Time: 21:41
 * To change this template use File | Settings | File Templates.
 */

var NavigationPanelMediator = function( viewComponent/*Object*/ )
{
    /**
     * Required by MooTools for inheritance.
     * @type Class
     */
    this.Extends = Mediator;

    this.configProxy/*ConfigProxy*/ = null;

    this.initialize = function(viewComponent){
        console.log("NavigationPanelMediator::initialize");

        this.parent( NavigationPanelMediator.NAME, viewComponent );

        this.onLeftRotate = this.onLeftRotate.bindWithEvent(this);
        this.onRightRotate = this.onRightRotate.bindWithEvent(this);

        var navigationPanel/*UserForm*/ = this.getNavigationPanel();
        navigationPanel.addEvent( NavigationPanel.LEFT_ROTATE, this.onLeftRotate );
        navigationPanel.addEvent( NavigationPanel.RIGHT_ROTATE, this.onRightRotate );

    };

    this.getNavigationPanel = function(){
        return this.viewComponent;
    };

    this.onLeftRotate = function(){
        this.sendNotification( ApplicationFacade.USER_ADDED, user );
    };

    this.onRightRotate = function(){
        this.sendNotification( ApplicationFacade.USER_ADDED, user );
    };

    /**
     * @override
     */
    this.listNotificationInterests = function()/*Array*/
    {
        return [];
    };
    /**
     * @override
     */
    this.handleNotification = function( note/*INotification*/ )
    {

    };

};
NavigationPanelMediator = new Class(new NavigationPanelMediator());
NavigationPanelMediator.NAME/*String*/ = "NavigationPanelMediator";