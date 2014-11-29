requirejs.config({
  waitSeconds: 30,		
  baseUrl: 'js',
  paths: {
	jquery:        'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
    jquery_ui:     'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min',
    jquery_mobile: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-mobile/1.4.1/jquery.mobile.min',
    h5bp:          'vendor/h5bp',
	steps:         'vendor/jquery.steps.min',
    wizard:        '../wizard/js/main',
    css:           '04_css',
  },

  shim: {
    wizard:        {deps: ['steps', 'css']},
    steps:         {deps: ['jquery']},
  }
})

require(['h5bp', 'wizard'])
