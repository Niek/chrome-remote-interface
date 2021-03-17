#!/usr/bin/env node
'use strict';

require('esbuild').build({
    plugins: [require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin()],
    entryPoints: ['index.js'],
    bundle: true,
    define: {'global': 'window'},
    sourcemap: true,
    minify: true,
    outfile: 'chrome-remote-interface.js',
}).catch(() => process.exit(1));
