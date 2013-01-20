/**
 * Created with JetBrains WebStorm.
 * User: ric
 * Date: 20.01.13
 * Time: 14:16
 * To change this template use File | Settings | File Templates.
 */

var CarBodyVO = function
(
    manufaktor/*String*/,
    model/*String*/,
    type/*String*/,
    path/*String*/,
    logo/*String*/,
    minDownForceRange/*int*/,
    maxDownForceRange/*int*/
) {

    this.initialize = function
    (
            manufaktor/*String*/,
            model/*String*/,
            type/*String*/,
            path/*String*/,
            logo/*String*/,
            minDownForceRange/*int*/,
            maxDownForceRange/*int*/
    ) {

        if (manufaktor != null)
            this.manufaktor = manufaktor;

        if (model != null)
            this.model = model;

        if (type != null)
            this.type = type;

        if (path != null)
            this.path = path;

        if (logo != null)
            this.logo = logo;

        if (minDownForceRange != null)
            this.minDownForceRange = minDownForceRange;

        if (maxDownForceRange != null)
            this.maxDownForceRange = maxDownForceRange;
    }

    this.manufaktor/*String*/ = "";
    this.model/*String*/ = ""
    this.type/*String*/ = ""
    this.path/*String*/ = ""
    this.logo/*String*/ = ""
    this.minDownForceRange/*int*/ = 0;
    this.maxDownForceRange/*int*/ = 9;
}
CarBodyVO = new Class(new CarBodyVO());