module.exports = function requireTimes () {
  var times = []
  var lastFile
  var lastTime
  var cwd = process.cwd()
  
  return {
    start: start,
    end: end
  }

  function start () {
    var original = require.extensions['.js']
    require.extensions['.js'] = function(module, filename) {
      var now = Date.now()
      if (lastTime) {
        var diff = now - lastTime
        times.push({time: diff, name: filename.replace(cwd, '.')})
      }
      lastFile = filename
      lastTime = now
      original(module, filename)
    }

    console.time('total')
  }
  
  function end () {
    if (lastTime) {
      var diff = Date.now() - lastTime
      times.push({time: diff, name: lastFile.replace(cwd, '.')})
    }
    
    console.timeEnd('total')

    times.sort(function byNum (a, b) {
      return b.time - a.time
    })
    .forEach(function(t) {
      console.log(t.time + 'ms', t.name)
    })
  }
}
