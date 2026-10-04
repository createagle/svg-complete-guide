import Image from 'next/image';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import ServerChart from './ServerChart.jsx';
import HoverChart from './HoverChart.jsx';
import logo from './logo.svg';
import Logo from './logo.react.svg';

export default async function Page() {
  const rows = JSON.parse(await readFile(join(process.cwd(), 'data/visits.json'), 'utf8'));
  return (
    <>
      <div className="stage">
        <figure><ServerChart /><figcaption>Server Component · no JS</figcaption></figure>
        {/* The data crosses to the client as props; the chart code ships as JS */}
        <figure><HoverChart rows={rows} /><figcaption>Client Component · hover a bar</figcaption></figure>
      </div>
      <div className="stage">
        {/* SVG files are served as they are: the default loader skips optimization for .svg */}
        <figure><Image src={logo} alt="Site logo" /><figcaption>next/image</figcaption></figure>
        <figure><Logo className="logo" role="img" aria-label="Site logo" /><figcaption>SVGR · currentColor</figcaption></figure>
      </div>
    </>
  );
}
