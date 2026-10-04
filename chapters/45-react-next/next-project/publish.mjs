// Copy the static export next to the chapter's other demos
import { cpSync, rmSync } from 'node:fs';

const target = new URL('../03-server-component/', import.meta.url);
rmSync(target, { recursive: true, force: true });
cpSync(new URL('./out/', import.meta.url), target, { recursive: true });
console.log('Published to 03-server-component/');
