#!/usr/bin/env node
'use strict';

require('esbuild').build({
    inject: [
        require.resolve('@esbuild-plugins/node-globals-polyfill/process'),
    ],
    entryPoints: ['index.js'],
    bundle: true,
    sourcemap: true,
    define: {'global': 'window'},
    globalName: 'CDP',
    minify: true,
    outfile: 'chrome-remote-interface.js',
}).catch(() => process.exit(1));
