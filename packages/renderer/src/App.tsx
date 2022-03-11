import logo from '../assets/logo.svg'
import ReactiveCounter from './components/ReactiveCounter'
import ReactiveHash from './components/ReactiveHash'
import ElectronVersions from './components/ElectronVersions'

export default function App() {
  return (
    <>
      <img src={logo} alt="" width="150" />

      <p>
        For a guide and recipes on how to configure / customize this project,
        check out the{' '}
        <a
          href="https://gtihub.com/QuarkMuncher/vite-electron-builder"
          target="_blank"
        >
          vite-electron-builder documentation
        </a>
      </p>

      <fieldset>
        <legend>Test React Reactivity</legend>
        <ReactiveCounter />
      </fieldset>

      <fieldset>
        <legend>Test Node.js API</legend>
        <ReactiveHash />
      </fieldset>

      <fieldset>
        <legend>Environment</legend>
        <ElectronVersions />
      </fieldset>
    </>
  )
}
