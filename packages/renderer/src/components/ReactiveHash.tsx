import { useState } from 'react'

export default function ReactiveHash() {
  const [rawString, setRawString] = useState('Hello World!')

  function getHashedString(value: string) {
    return window.nodeCrypto.sha256sum(value)
  }

  return (
    <>
      <label>
        Raw value
        <input
          type="text"
          value={rawString}
          onChange={e => setRawString(e.target.value)}
        />
      </label>
      <br />
      <label>
        Hashed by node:crypto
        <input type="text" value={getHashedString(rawString)} readOnly />
      </label>
      <br />
      <br />
      <code>packages/renderer/src/components/ReactiveHash.tsx</code>
    </>
  )
}
