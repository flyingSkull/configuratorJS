/**
 * Created with JetBrains WebStorm.
 * User: Ric
 * Date: 22.01.13
 * Time: 15:04
 * To change this template use File | Settings | File Templates.
 */

function XMLLoader() {

    var xmlHttp = null;
    var xmlDoc = null;
    var xmlPath = null;
    var firstImageArray = null;
    var secondImageArray = null;
    var configArray = null;
    var callback = null;
    var configVO = new ConfigVO();
    var configObject = new ConfigObject();

//    var configObj = {
//        reflection_alpha:0.631,
//        reflection_blendMode:"screen",
//        diffusion_alpha:0.58,
//        diffusion_blendMode:"normal",
//        show_admin_panel:true,
//        show_turn_right_button:true,
//        show_turn_left_button:true,
//        show_fullscreen_button:false,
//        show_facebook_button:false,
//        animateOnFirstRun:false,
//        blurXFrom:150,
//        blurDuration:150,
//        imageHost:"http://www.doppellotte.de/ric/",
//        loadingOrderFirstStep:[],
//        loadingOrderFinalStep:[],
//        imagePropertiesArray:[]
//    };

    this.initialize = function (path, result) {
        xmlPath = path;
        callback = result;
    };

    this.load = function () {

        try {
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlHttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlHttp.open("GET", xmlPath, false);
            xmlHttp.send();
        } catch (e) {
            window.alert("Unable to load XML-File");
            return;
        }

        xmlDoc = xmlHttp.responseXML;

//        console.log("1: " + xmlDoc.getElementsByTagName("loadingOrderFirstStep")[0].tagName); //loadingOrderFirstStep
//        console.log("1: " + xmlDoc.getElementsByTagName("loadingOrderFirstStep")[0].attributes[0].nodeValue); //Array
//        console.log("1: " + xmlDoc.getElementsByTagName("loadingOrderFirstStep")[0].childNodes); //Array
//        console.log("parse: " + xmlDoc.childNodes); //Array
//        console.log("parse: " + xmlDoc.getElementsByTagName("config")[0].getChildren()); //Array

        configArray = xmlDoc.getElementsByTagName("config")[0].getChildren();

        for (var i = 0; i < configArray.length; i++) {
//            console.log(configArray[i].tagName);
//            console.log(configArray[i].textContent);

            console.log(configObject.hasOwnProperty(configArray[i].tagName));

            if (configObject.hasOwnProperty(configArray[i].tagName)) {

                switch (configArray[i].attributes[0].nodeValue) {
                    case "Number":
                        configObject[configArray[i].tagName] = configArray[i].textContent;
                        break;

                    case "String":
                        configObject[configArray[i].tagName] = configArray[i].textContent;
                        break;

                    case "Array":
                        configObject[configArray[i].tagName] = configArray[i].textContent;
                        break;

                    case "Boolean":
                        configObject[configArray[i].tagName] = configArray[i].textContent;
                        break;
                }
            }
        }

        firstImageArray = xmlDoc.getElementsByTagName("loadingOrderFirstStep")[0].getChildren();
        secondImageArray = xmlDoc.getElementsByTagName("loadingOrderFinalStep")[0].getChildren();

        callback(configObject);
    };
}