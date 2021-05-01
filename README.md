# useratio

> Custom React hook to calculate aspect and assign height.

[![NPM](https://img.shields.io/npm/v/@focusinlab/useratio.svg)](https://www.npmjs.com/package/@focusinlab/useratio) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @focusinlab/useratio
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'useratio'

const Example = ({children}) => {
  const ref = useRef(null)
  const { height } = useRatio(1, 1, ref)
  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = height + 'px'
    }
  }, [height, ref])

  return (
    <div
      ref={ref}
      onClick={() => console.log('clicked!')}
      style={{
        color: '#333',
        display: 'flex',
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'center',
        appearance: 'button',
        width: '100%'
      }}
    >
      {children}
    </div>
  )
}

```

## License

MIT © [focus-in-lab](https://github.com/focus-in-lab)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
