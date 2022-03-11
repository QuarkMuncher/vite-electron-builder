export default function ElectronVersions() {
  const versions = Object.entries(window.versions).sort(([key1], [key2]) =>
    key1.localeCompare(key2)
  )

  return (
    <ul>
      {versions.map(([lib, ver]) => {
        console.log(`${lib}: ${ver}`)
        return (
          <li key={lib}>
            <strong>{lib}</strong>: {ver}
          </li>
        )
      })}
    </ul>
  )
}
