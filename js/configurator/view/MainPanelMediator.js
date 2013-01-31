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

    this.configProxy/*ConfigProxy*/ = null;

    /**
     * Constructor
     *
     * @param viewComponent
     */
    this.initialize = function(viewComponent){
        console.log("MainPanelMediator::initialize");

        this.parent( MainPanelMediator.NAME, viewComponent );

        this.onLeftRotate = this.onLeftRotate.bindWithEvent(this);
        this.onRightRotate = this.onRightRotate.bindWithEvent(this);

        var mainPanel/*UserForm*/ = this.getMainPanel();
        mainPanel.addEvent( MainPanel.LEFT_ROTATE, this.onLeftRotate );
        mainPanel.addEvent( MainPanel.RIGHT_ROTATE, this.onRightRotate );

        this.configProxy = this.facade.retrieveProxy( ConfigProxy.NAME );
        this.configProxy.loadConfigXML();
    };

    this.getMainPanel = function(){
        return this.viewComponent;
    };

    this.currentIndex = 1;

    this.onLeftRotate = function(){
        if (this.currentIndex != 8) {
            this.currentIndex++;
        } else {
            this.currentIndex = 1;
        }
        this.showImageByIndex(this.currentIndex);
    };

    this.onRightRotate = function(){
        if (this.currentIndex != 1) {
            this.currentIndex--;
        } else {
            this.currentIndex = 8;
        }
        this.showImageByIndex(this.currentIndex);
    };

    this.showImageByIndex = function(currentIndex){

        var mainPanel = this.getMainPanel();
        var elementId = "image-container-"+currentIndex;
        console.log(mainPanel.getElementById(elementId));
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
                var mainPanel = this.getMainPanel();
                console.log(mainPanel);
                console.log(mainPanel.imageContainer1);
                break;
        }
    };

};
MainPanelMediator = new Class(new MainPanelMediator());
MainPanelMediator.NAME/*String*/ = "MainPanelMediator";