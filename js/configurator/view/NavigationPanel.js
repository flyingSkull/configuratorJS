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
        this.parent("main-panel");
    }

    /**
     * Creates all children required to create the
     * initial View state of this control and adds them to the DOM.
     */
    this.initializeChildren = function () {
        console.log("NavigationPanel::initializeChildren");
    }

    /**
     * Adds the'click' listener to the startStop button after creation.
     */
    this.childrenInitialized = function () {
        console.log("NavigationPanel::childrenInitialized");
    }

    this.initializationComplete = function () {
        console.log("NavigationPanel::initializationComplete");
    }

}
NavigationPanel = new Class(new NavigationPanel());