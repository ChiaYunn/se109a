//const { equal } = require('assert')
const assert = require('assert')
const _ = require('./hw3')
var expect = require('chai').expect
describe('hw3test', function () {
    describe('join', function () {
        it("_.join(['a', 'b', 'c'],'0') equalTo [a0b0c]", function () {
            assert.deepStrictEqual(_.join(['a', 'b', 'c'], '0'),
                'a0b0c'
            )
        })
    })

    describe('join', function () {
        it("_.join(['a', 'b', 'c'],'-') equalTo [a-b-c]", function () {
            assert.deepStrictEqual(_.join(['a', 'b', 'c'], '-'),
                'a-b-c'
            )
        })
    })

    describe('join', function () {
        it("_.join(['a', 'b', 'c'],'~') equalTo [a~b~c]", function () {
            assert.deepStrictEqual(_.join(['a', 'b', 'c'], '~'),
                'a~b~c'
            )
        })
    })

    describe('last', function () {
        it("_.last(['1', '2', '3']) equalTo '3' ", function () {
            assert.deepStrictEqual(_.last(['1', '2', '3']),
                '3'
            )
        })
    })

    describe('last', function () {
        it("_.last(['a', 'b', 'c']) equalTo 'c' ", function () {
            assert.deepStrictEqual(_.last(['a', 'b', 'c']),
                'c'
            )
        })
    })

    describe('last', function () {
        it("_.last(['3', 'b', '2', 'a', '1']) equalTo '1' ", function () {
            assert.deepStrictEqual(_.last(['3', 'b', '2', 'a', '1']),
                '1'
            )
        })
    })

    describe('nth', function () {
        it("_.nth(['a', 'b', 'c', 'd'] equalTo 'b' ", function () {
            assert.deepStrictEqual(_.nth(['a', 'b', 'c', 'd'], n = 1),
                'b'
            )
        })
    })

    describe('nth', function () {
        it("_.nth(['a', 'b', 'c', 'd'] equalTo 'c' ", function () {
            assert.deepStrictEqual(_.nth(['a', 'b', 'c', 'd'], n = -2),
                'c'
            )
        })
    })

    describe('nth', function () {
        it("_.nth(['a', 'b', 'c', 'd'] equalTo 'a' ", function () {
            assert.deepStrictEqual(_.nth(['a', 'b', 'c', 'd'], n = 0),
                'a'
            )
        })
    })
})