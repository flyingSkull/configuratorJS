/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 20.01.13
 * Time: 13:24
 * To change this template use File | Settings | File Templates.
 */

var NavigationPanel = function () {
    this.Extends = UIComponent;

    this.facade = null;

    /**
     * Constructor
     */
    this.initialize = function () {
        console.log("NavigationPanel::initialize");
        this.parent("navigation-panel");
    };

    /**
     * Creates all children required to create the
     * initial View state of this control and adds them to the DOM.
     */
    this.initializeChildren = function () {
        console.log("NavigationPanel::initializeChildren");
        this.leftRotateButton = $("left-rotate-button");
        this.rightRotateButton = $("right-rotate-button");
    };

    /**
     * Adds the'click' listener to the startStop button after creation.
     */
    this.childrenInitialized = function () {
        console.log("NavigationPanel::childrenInitialized");

        this.leftRotateButton.addEvent( "click", this.leftRotate_clickHandler );
        this.rightRotateButton.addEvent( "click", this.rightRotate_clickHandler );
    };

    this.initializationComplete = function () {
        console.log("NavigationPanel::initializationComplete");
    };

    this.leftRotate_clickHandler = function(){
        this.fireEvent( NavigationPanel.LEFT_ROTATE );
    };

    this.rightRotate_clickHandler = function(){
        this.fireEvent( NavigationPanel.RIGHT_ROTATE );
    };

};

NavigationPanel = new Class(new NavigationPanel());

NavigationPanel.LEFT_ROTATE/*String*/ = "leftRotate";
NavigationPanel.RIGHT_ROTATE/*String*/ = "rightRotate";