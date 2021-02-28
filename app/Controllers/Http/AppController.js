'use strict'

class AppController {
    index({response}){
        return response.send('It gets the controller!')
    }

}

module.exports = AppController
