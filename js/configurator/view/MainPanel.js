/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 19.01.13
 * Time: 17:02
 * To change this template use File | Settings | File Templates.
 */

var MainPanel = function () {

    this.Extends = UIComponent;

    this.facade = null;

    /**
     * Constructor
     */
    this.initialize = function () {
        console.log("MainPanel::initialize");
        this.parent("main-panel");

        this.leftRotate_clickHandler = this.leftRotate_clickHandler.bindWithEvent(this);
        this.rightRotate_clickHandler = this.rightRotate_clickHandler.bindWithEvent(this);
    };

    /**
     * Creates all children required to create the
     * initial View state of this control and adds them to the DOM.
     */
    this.initializeChildren = function () {
        console.log("MainPanel::initializeChildren");
        this.imageContainer1 = $("image-container-1");
        this.imageContainer2 = $("image-container-2");
        this.imageContainer3 = $("image-container-3");
        this.imageContainer4 = $("image-container-4");
        this.imageContainer5 = $("image-container-5");
        this.imageContainer6 = $("image-container-6");
        this.imageContainer7 = $("image-container-7");
        this.imageContainer8 = $("image-container-8");

        this.leftRotateButton = $("left-rotate-button");
        this.rightRotateButton = $("right-rotate-button");
    };

    /**
     * Adds the'click' listener to the startStop button after creation.
     */
    this.childrenInitialized = function () {
        console.log("MainPanel::childrenInitialized");

        this.leftRotateButton.addEvent( "click", this.leftRotate_clickHandler );
        this.rightRotateButton.addEvent( "click", this.rightRotate_clickHandler );
    };

    this.initializationComplete = function () {
        console.log("MainPanel::initializationComplete");
    };

    this.leftRotate_clickHandler = function(){
        this.fireEvent( MainPanel.LEFT_ROTATE );
    };

    this.rightRotate_clickHandler = function(){
        this.fireEvent( MainPanel.RIGHT_ROTATE );
    };
};

MainPanel = new Class(new MainPanel());
MainPanel.LEFT_ROTATE/*String*/ = "leftRotate";
MainPanel.RIGHT_ROTATE/*String*/ = "rightRotate";
