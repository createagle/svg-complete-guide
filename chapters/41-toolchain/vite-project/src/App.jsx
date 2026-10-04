import bellUrl from './icons/bell.svg';             // default: a URL (or a data: URL when the file is small)
import bellRaw from './icons/bell.svg?raw';         // the file's text
import Bell from './icons/bell.svg?react';          // SVGR: a React component
import Cloud from './icons/cloud.svg?react';
import IconHeart from '~icons/lucide/heart';        // unplugin-icons: built from Iconify's lucide set
import IconStar from '~icons/lucide/star';
import sprite from 'virtual:svg-sprite';            // our own plugin: every file in src/sprite as <symbol>s

const Use = ({ name }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><use href={'#icon-' + name} /></svg>
);

export default function App() {
  return (
    <>
      {/* The sprite is inlined once; <use> then works even when the page is opened from disk */}
      <div hidden dangerouslySetInnerHTML={{ __html: sprite }} />
      <div className="grid">
        <section className="card">
          <code>import url from './bell.svg'</code>
          <div className="row"><img src={bellUrl} alt="Bell" /></div>
          <p>{bellUrl.slice(0, 44)}…</p>
        </section>
        <section className="card">
          <code>'./bell.svg?raw'</code>
          {/* Only for files you control: injecting markup bypasses React's escaping */}
          <div className="row" dangerouslySetInnerHTML={{ __html: bellRaw }} />
          <p>{bellRaw.length} characters, colors as authored</p>
        </section>
        <section className="card">
          <code>'./bell.svg?react'</code>
          <div className="row"><Bell aria-label="Bell" role="img" /><Cloud aria-hidden="true" /></div>
          <p>Component, currentColor, props pass through</p>
        </section>
        <section className="card">
          <code>'~icons/lucide/heart'</code>
          <div className="row"><IconHeart aria-hidden="true" /><IconStar aria-hidden="true" /></div>
          <p>Only the icons you import end up in the bundle</p>
        </section>
        <section className="card">
          <code>'virtual:svg-sprite'</code>
          <div className="row"><Use name="home" /><Use name="search" /><Use name="user" /></div>
          <p>One sprite, many &lt;use&gt; references</p>
        </section>
      </div>
    </>
  );
}
