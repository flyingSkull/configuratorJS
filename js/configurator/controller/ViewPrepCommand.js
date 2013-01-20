/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 20.01.13
 * Time: 14:02
 * To change this template use File | Settings | File Templates.
 */

var PrepViewCommand = function () {
    /**
     * Required by MooTools for inheritance.
     * @type Class
     */
    this.Extends = SimpleCommand;

    this.execute = function (note/*INotification*/) {
        var app/*Application*/ = note.getBody();

        this.facade.registerMediator(new MainPanelMediator(app.mainPanel));
        this.facade.registerMediator(new NavigationPanelMediator(app.navigationPanel));
    }
}
PrepViewCommand = new Class(new PrepViewCommand());