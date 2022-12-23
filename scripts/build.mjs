#!/usr/bin/env zx

const archs = process.platform === 'win32' ? ['x64'] : ['x64', 'arm64'];

const nodeVersions = ['16.0.0', '17.0.1', '18.0.0'];
const electronVersions = ['19.0.0', '20.0.0', '21.0.0', '22.0.0'];

for (const arch of archs) {
    await $`npx prebuildify --strip --arch ${arch} ${nodeVersions.map(v => ['-t', `node@${v}`]).flat()} ${electronVersions.map(v => ['-t', `electron@${v}`]).flat()}`;
}
