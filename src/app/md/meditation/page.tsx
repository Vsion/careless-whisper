'use client';

import Content from './content.mdx';

export default () => {
  try {
    console.log('Content', Content)

  } catch (e) {
    console.dir(e)
  }
  return <>
    <div className={'container md'}>
      <Content />
    </div>
  </>
}