import chai from 'chai'
import { add, minus } from '@/js/algorithm.js'
import { sayHello } from '@/js/utils.js'

const expect = chai.expect

describe('算法测试：', function() {
  it('#add()', function() {
    expect(add(1, 4, 5)).equal(10)
  })
  it('#minus()', function() {
    expect(minus(10, 4)).equal(6)
  })
})

describe('工具测试：', function() {
  it('#sayHello()', function() {
    expect(sayHello('Tom')).equal('hello Tom')
  })
})
