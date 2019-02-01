var assert = require('assert')
var kakka = require('./index')

describe('basic test',function() {
    it('should return correct name',function(){
        var nimi = 'pekka'
        assert.equal(kakka.test(nimi),nimi)
    })
})    