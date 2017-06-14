require.config({
    "baseUrl": "./",
    "paths": {
        "jquery": "jquery-3.2.1.min"
    }
})

require(['jquery'], function ($) {
     $('body').append($('<h1>Hello World!</h1>'))

})
