// Do not change this file
const assert = require('assert/strict')
const sinon = require('sinon')
const animals = require('../api/animals')
const animalRace = require('../lib/animal-race')

const minimal = 3000
const overhead = 500
const timeout = minimal + overhead

describe('animal-race', function () {
  it('should complete the race in expected time', async function () {
    this.timeout(timeout)
    const start = Date.now()
    await animalRace(animals)
    const end = Date.now()
    const time = end - start
    assert.ok(time >= minimal, `time should be >= ${minimal}`)
  })

  it('should complete the race with the expected result', async function () {
    this.timeout(timeout)
    const result = await animalRace(animals)
    const expectedResult = ['🐌', '🐇', '🐢']
    assert.deepEqual(result, expectedResult, `result should be ${expectedResult}`)
  })

  it('should use the provided animals api', async function () {
    this.timeout(timeout)
    const animalsSpy = sinon.spy(animals)
    await animalRace(animalsSpy)
    assert.ok(animalsSpy.snail.calledOnce, 'animals.snail() should be called once')
    assert.ok(animalsSpy.rabbit.calledOnce, 'animals.rabbit() should be called once')
    assert.ok(animalsSpy.turtle.calledOnce, 'animals.turtle() should be called once')
  })
})



