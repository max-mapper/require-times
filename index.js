var path = require('path');

module.exports = function requireTimes (extensions) {
  var times = [];
  var timesByName = {};
  var cwd = process.cwd();

  if (!extensions)
    extensions = [ '.js' ]
  extensions.forEach(function (e) {
    wrap(e);
  });

  return {
    start: start,
    end: end
  }

  function wrap (extension) {
    var original = require.extensions[extension]
    require.extensions[extension] = function(module, filename) {
      var start = Date.now()
      original(module, filename)
      var diff = (Date.now()) - start

      data = {
        time: diff,
        name: path.relative(cwd, module.filename),
        parent : module.parent ? path.relative(cwd, module.parent.filename) : undefined
      };

      times.push(data);
      timesByName[data.name] = data;
    }
  }

  function start (extensions) {
    times = [];
    timesByName = {};
    console.time('total');
  }

  function printTree(parentFilename, prefix, threshold) {
    times.filter(function (i) {
      return i.parent == parentFilename;
    })
    .sort(function byNum (a, b) {
      return b.time - a.time;
    })
    .forEach(function(t) {
      if (t.time > threshold)
        console.log(prefix + t.time + 'ms', t.name)
      printTree(t.name, prefix + '  ', threshold);
    });
  }

  function end (threshold) {
    console.timeEnd('total');

    threshold = threshold || 0;

    times.filter(function (i) {
      return timesByName[i.parent] == undefined;
    })
    .map(function (i) {
      return i.parent;
    })
    .filter(function(i, pos, self) {
      return self.indexOf(i) == pos;
    })
    .forEach(function (i) {
      printTree(i, '', threshold);
    });
  }
}
