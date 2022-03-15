import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Layout from './pages/Layout'
import Login from './pages/Login'

const App = () => {
  return (
    <Router>
      <Route path="/" exact render={() => <Redirect to="/home" />} />
      <Route path="/home" component={Layout} />
      <Route path="/login" component={Login} />
    </Router>
  )
}

export default App
