function Controller() {
    function data(indexView) {
        Ti.API.info("indexView.top" + indexView.top);
        var Animation = Ti.UI.createAnimation({
            duration: 50,
            top: indexView.top,
            left: indexView.left,
            bottom: indexView.bottom
        });
        $[indexView.viewObj].animate(Animation);
        Animation.addEventListener("complete", function() {
            if (7 > inx) {
                inx += 1;
                data(view[inx]);
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#ccc",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.mainContainer = Ti.UI.createView({
        top: "20dp",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "mainContainer"
    });
    $.__views.index.add($.__views.mainContainer);
    $.__views.containImg = Ti.UI.createView({
        top: "40dp",
        bottom: "40dp",
        left: "0dp",
        right: "40dp",
        id: "containImg"
    });
    $.__views.mainContainer.add($.__views.containImg);
    $.__views.familyMedicalClinicView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: -500,
        left: -500,
        layout: "horizontal",
        id: "familyMedicalClinicView"
    });
    $.__views.mainContainer.add($.__views.familyMedicalClinicView);
    $.__views.familyMedicalClinicImage = Ti.UI.createImageView({
        height: "65dp",
        width: "65dp",
        image: "/images/appicon.png",
        id: "familyMedicalClinicImage"
    });
    $.__views.familyMedicalClinicView.add($.__views.familyMedicalClinicImage);
    $.__views.generalDentistryView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: -500,
        left: -500,
        layout: "horizontal",
        id: "generalDentistryView"
    });
    $.__views.mainContainer.add($.__views.generalDentistryView);
    $.__views.generalDentistryImage = Ti.UI.createImageView({
        height: "65dp",
        width: "65dp",
        image: "/images/appicon.png",
        id: "generalDentistryImage"
    });
    $.__views.generalDentistryView.add($.__views.generalDentistryImage);
    $.__views.pharmacyView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: -500,
        left: -500,
        layout: "horizontal",
        id: "pharmacyView"
    });
    $.__views.mainContainer.add($.__views.pharmacyView);
    $.__views.pharmacyImage = Ti.UI.createImageView({
        height: "65dp",
        width: "65dp",
        image: "/images/appicon.png",
        id: "pharmacyImage"
    });
    $.__views.pharmacyView.add($.__views.pharmacyImage);
    $.__views.physiotherapyView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        top: -500,
        left: -500,
        layout: "vertical",
        id: "physiotherapyView"
    });
    $.__views.mainContainer.add($.__views.physiotherapyView);
    $.__views.physiotherapyImage = Ti.UI.createImageView({
        height: "65dp",
        width: "65dp",
        image: "/images/appicon.png",
        id: "physiotherapyImage"
    });
    $.__views.physiotherapyView.add($.__views.physiotherapyImage);
    $.__views.chiropractorView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        bottom: -500,
        left: -500,
        layout: "vertical",
        id: "chiropractorView"
    });
    $.__views.mainContainer.add($.__views.chiropractorView);
    $.__views.chiropractorImage = Ti.UI.createImageView({
        height: "65dp",
        width: "65dp",
        image: "/images/appicon.png",
        id: "chiropractorImage"
    });
    $.__views.chiropractorView.add($.__views.chiropractorImage);
    $.__views.eyeDoctorView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        bottom: -500,
        left: -500,
        layout: "horizontal",
        id: "eyeDoctorView"
    });
    $.__views.mainContainer.add($.__views.eyeDoctorView);
    $.__views.eyeDoctorImage = Ti.UI.createImageView({
        height: "65dp",
        width: "65dp",
        image: "/images/appicon.png",
        id: "eyeDoctorImage"
    });
    $.__views.eyeDoctorView.add($.__views.eyeDoctorImage);
    $.__views.psychologistView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        bottom: -500,
        left: -500,
        layout: "horizontal",
        id: "psychologistView"
    });
    $.__views.mainContainer.add($.__views.psychologistView);
    $.__views.psychologistImage = Ti.UI.createImageView({
        height: "65dp",
        width: "65dp",
        image: "/images/appicon.png",
        id: "psychologistImage"
    });
    $.__views.psychologistView.add($.__views.psychologistImage);
    $.__views.naturopathicMedicineView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        bottom: -500,
        left: -500,
        layout: "vertical",
        id: "naturopathicMedicineView"
    });
    $.__views.mainContainer.add($.__views.naturopathicMedicineView);
    $.__views.naturopathicMedicineImage = Ti.UI.createImageView({
        height: "65dp",
        width: "65dp",
        left: "5dp",
        image: "/images/appicon.png",
        id: "naturopathicMedicineImage"
    });
    $.__views.naturopathicMedicineView.add($.__views.naturopathicMedicineImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    var inx = 0;
    var view = [ {
        viewObj: "naturopathicMedicineView",
        top: null,
        left: "5dp",
        bottom: "10dp"
    }, {
        viewObj: "psychologistView",
        top: null,
        left: "95dp",
        bottom: "40dp"
    }, {
        viewObj: "eyeDoctorView",
        top: null,
        left: "180dp",
        bottom: "85dp"
    }, {
        viewObj: "chiropractorView",
        top: null,
        left: "200dp",
        bottom: "170dp"
    }, {
        viewObj: "physiotherapyView",
        top: "170dp",
        left: "180dp",
        bottom: null
    }, {
        viewObj: "pharmacyView",
        top: "85dp",
        left: "170dp",
        bottom: null
    }, {
        viewObj: "generalDentistryView",
        top: "35dp",
        left: "90dp",
        bottom: null
    }, {
        viewObj: "familyMedicalClinicView",
        top: "15dp",
        left: "5dp",
        bottom: null
    } ];
    data(view[inx]);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;