define(['css'], function(requireCss){
	requireCss('css/vendor/jquery.steps.css')
	requireCss('wizard/css/main.css')
	$('[data-cr-role=wizard]').steps({
		headerTag: "h3",
		bodyTag: "section",
		transitionEffect: "slideLeft",
		stepsOrientation: "vertical"
	});
})
