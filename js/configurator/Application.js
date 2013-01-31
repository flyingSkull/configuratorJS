/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 19.01.13
 * Time: 16:49
 * To change this template use File | Settings | File Templates.
 */

var Application = function () {

    this.Extends = UIComponent;

    /*
     * Child elements.
     */
    this.mainPanel = null;
    this.navigationPanel = null;

    this.facade = null;

    this.initialize = function () {
        console.log("############# init-configurator #############");
        this.facade = ApplicationFacade.getInstance();
        this.parent("configurator-div");
    };

    /**
     * Creates and adds the panels as children.
     */
    this.initializeChildren = function () {
        this.mainPanel = new MainPanel();
        this.addChild(this.mainPanel);

        this.navigationPanel = new NavigationPanel();
        this.addChild(this.navigationPanel);
    };

    this.initializationComplete = function () {
        this.facade.startup(this);
    };
};

Application = new Class(new Application());