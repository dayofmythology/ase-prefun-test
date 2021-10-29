// Do not change this file
const assert = require('assert/strict')
const animals = require('../api/animals')
const animalRace = require('../lib/animal-race')

const minimal = 3000
const overhead = 500
const timeout = minimal + overhead

describe('animal-race', function () {
  it('should complete the race in expected time and with the expected result', async function () {
    this.timeout(timeout)
    const start = Date.now()
    const result = await animalRace(animals)
    const end = Date.now()
    const time = end - start
    assert.ok(time >= minimal, `time: ${time}ms`)
    assert.deepEqual(result, ['🐌', '🐇', '🐢'], `result: ${result}`)
  })
})

