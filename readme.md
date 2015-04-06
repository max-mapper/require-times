# require-times

[![NPM](https://nodei.co/npm/require-times.png)](https://nodei.co/npm/require-times/)

find out how long `require` calls take in your program. this is a debugging tool for figuring out why apps load slowly

the results print the amount of time elapsed *between* require calls. this isn't necessarily the same as the amount of time taken by each require, but rather the time elapsed between two require calls starting (as opposed to the time taken between 1 require call starting *and* ending, but we can't instrument ending, only starting)

## usage

require it and make an instance

```
var rt = require('require-times')()
```

call 'start' before the requires you wanna measure

```
rt.start()
```

call 'end' when you wanna stop measuring. you should put this right after your last require() call

```
rt.end()
```

calling `.end` will print out the times to STDOUT, for example:

```
🐈  node tester.js
total: 101ms
5ms ./node_modules/concat-stream/node_modules/typedarray/index.js
4ms ./node_modules/ansimd/node_modules/unescape-html/index.js
4ms ./node_modules/animate-tty/node_modules/charm/lib/encode.js
3ms ./node_modules/multistream/index.js
3ms ./node_modules/through2/node_modules/readable-stream/node_modules/isarray/index.js
2ms ./node_modules/stream-splicer/index.js
2ms ./node_modules/stream-splicer/node_modules/isarray/index.js
2ms ./node_modules/stream-splicer/node_modules/inherits/inherits.js
2ms ./node_modules/stream-splicer/node_modules/readable-stream/lib/_stream_transform.js
2ms ./node_modules/stdout-stream/node_modules/readable-stream/node_modules/isarray/index.js
2ms ./node_modules/through2/node_modules/readable-stream/node_modules/core-util-is/lib/util.js
2ms ./node_modules/rimraf/node_modules/glob/node_modules/minimatch/node_modules/brace-expansion/index.js
2ms ./node_modules/rimraf/node_modules/glob/node_modules/inherits/inherits.js
2ms ./node_modules/rimraf/node_modules/glob/common.js
2ms ./node_modules/concat-stream/node_modules/readable-stream/node_modules/isarray/index.js
2ms ./node_modules/pretty-bytes/pretty-bytes.js
2ms ./node_modules/read/node_modules/mute-stream/mute.js
2ms ./node_modules/stdout-stream/index.js
1ms ./node_modules/through2/node_modules/xtend/immutable.js
1ms ./node_modules/pump/index.js
1ms ./node_modules/pump/node_modules/end-of-stream/index.js
1ms ./node_modules/pump/node_modules/end-of-stream/node_modules/once/node_modules/wrappy/wrappy.js
1ms ./node_modules/format-data/index.js
1ms ./node_modules/ndjson/node_modules/split2/index.js
1ms ./node_modules/format-data/node_modules/csv-write-stream/index.js
1ms ./node_modules/format-data/node_modules/csv-write-stream/node_modules/generate-object-property/index.js
1ms ./node_modules/format-data/node_modules/csv-write-stream/node_modules/generate-object-property/node_modules/is-property/is-property.js
1ms ./node_modules/format-data/node_modules/ssejson/node_modules/split2/index.js
1ms ./node_modules/stdout-stream/node_modules/readable-stream/lib/_stream_readable.js
1ms ./node_modules/stream-splicer/node_modules/readable-stream/lib/_stream_readable.js
1ms ./node_modules/concat-stream/node_modules/typedarray/index.js
1ms ./node_modules/stream-splicer/node_modules/readable-stream/node_modules/core-util-is/lib/util.js
1ms ./node_modules/stdout-stream/node_modules/readable-stream/lib/_stream_writable.js
1ms ./node_modules/stream-splicer/node_modules/readable-stream/lib/_stream_duplex.js
1ms ./node_modules/multistream/node_modules/inherits/inherits.js
1ms ./node_modules/stream-splicer/node_modules/readable-stream/lib/_stream_passthrough.js
1ms ./node_modules/stdout-stream/node_modules/readable-stream/writable.js
1ms ./node_modules/stream-splicer/node_modules/readable-wrap/index.js
1ms ./node_modules/format-data/node_modules/inherits/inherits.js
1ms ./node_modules/end-of-stream/index.js
1ms ./node_modules/ansimd/index.js
1ms ./node_modules/end-of-stream/node_modules/once/once.js
1ms ./bin/rows-delete.js
1ms ./bin/clean.js
1ms ./node_modules/rimraf/rimraf.js
1ms ./node_modules/rimraf/node_modules/glob/glob.js
1ms ./node_modules/rimraf/node_modules/glob/node_modules/minimatch/minimatch.js
1ms ./node_modules/through2/through2.js
1ms ./node_modules/rimraf/node_modules/glob/node_modules/minimatch/node_modules/brace-expansion/node_modules/balanced-match/index.js
1ms ./node_modules/through2/node_modules/readable-stream/transform.js
1ms ./node_modules/through2/node_modules/readable-stream/lib/_stream_duplex.js
1ms ./node_modules/rimraf/node_modules/glob/node_modules/inflight/inflight.js
1ms ./node_modules/rimraf/node_modules/glob/node_modules/once/once.js
1ms ./bin/import.js
1ms ./lib/progress-log.js
1ms ./node_modules/animate-tty/index.js
1ms ./node_modules/stdout-stream/node_modules/readable-stream/node_modules/core-util-is/lib/util.js
1ms ./node_modules/through2/node_modules/readable-stream/node_modules/inherits/inherits.js
1ms ./bin/pull.js
1ms ./bin/rows-get.js
1ms ./bin/clone.js
1ms ./node_modules/read/lib/read.js
1ms ./node_modules/stdout-stream/node_modules/readable-stream/node_modules/inherits/inherits.js
1ms ./bin/push.js
1ms ./node_modules/concat-stream/index.js
1ms ./node_modules/concat-stream/node_modules/readable-stream/readable.js
1ms ./node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js
1ms ./node_modules/concat-stream/node_modules/inherits/inherits.js
1ms ./node_modules/concat-stream/node_modules/readable-stream/lib/_stream_writable.js
1ms ./node_modules/concat-stream/node_modules/readable-stream/lib/_stream_duplex.js
1ms ./node_modules/concat-stream/node_modules/readable-stream/lib/_stream_transform.js
1ms ./node_modules/stream-splicer/node_modules/indexof/index.js
0ms ./node_modules/rimraf/node_modules/glob/node_modules/once/node_modules/wrappy/wrappy.js
0ms ./node_modules/ansimd/node_modules/marked/lib/marked.js
0ms ./bin/cat.js
0ms ./bin/listen.js
0ms ./node_modules/animate-tty/node_modules/charm/index.js
0ms ./node_modules/stdout-stream/node_modules/readable-stream/lib/_stream_duplex.js
0ms ./node_modules/speedometer/index.js
0ms ./bin/rows.js
0ms ./bin/blobs-put.js
0ms ./node_modules/stream-splicer/node_modules/readable-stream/lib/_stream_writable.js
0ms ./bin/version.js
0ms ./bin/blobs.js
0ms ./node_modules/pump/node_modules/once/once.js
0ms ./bin/init.js
0ms ./node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js
0ms ./node_modules/format-data/node_modules/ssejson/index.js
0ms ./node_modules/pump/node_modules/end-of-stream/node_modules/once/once.js
0ms ./bin/rows-put.js
0ms ./node_modules/rimraf/node_modules/glob/node_modules/minimatch/node_modules/brace-expansion/node_modules/concat-map/index.js
0ms ./node_modules/through2/node_modules/readable-stream/lib/_stream_transform.js
0ms ./node_modules/concat-stream/node_modules/readable-stream/lib/_stream_readable.js
0ms ./node_modules/format-data/json.js
0ms ./node_modules/concat-stream/node_modules/readable-stream/node_modules/core-util-is/lib/util.js
0ms ./node_modules/rimraf/node_modules/glob/sync.js
0ms ./node_modules/stream-splicer/node_modules/readable-stream/readable.js
0ms ./node_modules/end-of-stream/node_modules/once/node_modules/wrappy/wrappy.js
0ms ./node_modules/rimraf/node_modules/glob/node_modules/inflight/node_modules/wrappy/wrappy.js
0ms ./node_modules/concat-stream/node_modules/readable-stream/lib/_stream_passthrough.js
0ms ./node_modules/ndjson/index.js
0ms ./bin/help.js
```
