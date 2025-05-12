#!/usr/bin/env zx

const archs = process.platform === 'win32' ? ['x64'] : ['x64', 'arm64'];

const nodeVersions = ['18.0.0', '19.0.0', '20.0.0', '21.0.0', '22.0.0'];
const electronVersions = ['22.0.0', '27.0.0', '31.0.0', '32.0.0', '33.0.0', '34.0.0'];

for (const arch of archs) {
    try {
        await $`npx prebuildify --strip --arch ${arch} ${nodeVersions.map(v => ['-t', `node@${v}`]).flat()} ${electronVersions.map(v => ['-t', `electron@${v}`]).flat()}`;
    }
    catch (error) {
        console.error(`Error building for architecture ${arch}:`, error);
    }
}
