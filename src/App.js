import MainRouter from './router';
import {Fragment} from 'react';
import {AuthProvider} from './context/context'

function App() {            
  return (
    <Fragment>   
      <AuthProvider>
        <MainRouter />
      </AuthProvider> 
    </Fragment>
  );
}

export default App;
