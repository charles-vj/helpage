import SignUp from "./SignUp";
import { AuthProvider } from "../Contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";


function App() {
  return (
    
        
          <div>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component = {Dashboard}></PrivateRoute>
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
              </Switch>
            </AuthProvider>
          </Router>
            
          </div>
        
      
    
  );
}

export default App;
