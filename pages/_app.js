import { globalStyles } from '../shared/styles'
import '../shared/edosynth_style.css'

const App = ({ Component, pageProps }) => (
  <>
    {globalStyles}
    <Component {...pageProps} />
  </>
)

export default App
