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
    }

    /**
     * Creates all children required to create the
     * initial View state of this control and adds them to the DOM.
     */
    this.initializeChildren = function () {
        console.log("MainPanel::initializeChildren");
    }

    /**
     * Adds the'click' listener to the startStop button after creation.
     */
    this.childrenInitialized = function () {
        console.log("MainPanel::childrenInitialized");
    }

    this.initializationComplete = function () {
        console.log("MainPanel::initializationComplete");
    }

}
MainPanel = new Class(new MainPanel());
