$.index.open();

var inx = 0;
var view = [{
	viewObj : "naturopathicMedicineView",
	top : null,
	left : '5dp',
	bottom : '10dp'
}, {
	viewObj : "psychologistView",
	top : null,
	left : '95dp',
	bottom : '40dp'
}, {
	viewObj : "eyeDoctorView",
	top : null,
	left : '180dp',
	bottom : '85dp'
}, {
	viewObj : "chiropractorView",
	top : null,
	left : '200dp',
	bottom : '170dp'
}, {
	viewObj : "physiotherapyView",
	top : '170dp',
	left : '180dp',
	bottom : null
}, {
	viewObj : "pharmacyView",
	top : '85dp',
	left : '170dp',
	bottom : null
}, {
	viewObj : "generalDentistryView",
	top : '35dp',
	left : '90dp',
	bottom : null
}, {
	viewObj : "familyMedicalClinicView",
	top : '15dp',
	left : '5dp',
	bottom : null
}];

data(view[inx]);

function data(indexView) {
	Ti.API.info('indexView.top' + indexView.top);
	var Animation = Ti.UI.createAnimation({
		duration : 50,
		top : indexView.top,
		left : indexView.left,
		bottom : indexView.bottom
	});
	$[indexView.viewObj].animate(Animation);
	Animation.addEventListener('complete', function(e) {
		if (inx < 7) {
			inx = inx + 1;
			data(view[inx]);
		}
	});
};
