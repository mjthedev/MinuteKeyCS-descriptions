import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import EntirePage from './components/mainPage/entirePage';
import Welcome from './components/descriptions/welcome'; 
import AutoKey from './components/descriptions/auto/autoKey'; 
import AutoLockout from './components/descriptions/auto/autoLockout'; 
import AutoLockoutKey from './components/descriptions/auto/autoLockoutKey'; 
import AutoIgnition from './components/descriptions/auto/autoIgnition'; 
import HomeLockout from './components/descriptions/home/homeLockout';
import HomeLockChange from './components/descriptions/home/homeLockChange';
import HomeLockInstall from './components/descriptions/home/homeLockInstall';
import HomeRekey from './components/descriptions/home/homeRekey';
import HomeLockRepair from './components/descriptions/home/homeLockRepair';
import BusinessLockout from './components/descriptions/business/businessLockout';
import BusinessLockChange from './components/descriptions/business/businessLockChange';
import BusinessLockInstall from './components/descriptions/business/businessLockInstall';
import BusinessRekey from './components/descriptions/business/businessRekey';
import BasicSafeLockout from './components/descriptions/others/basicSafeLockout';
import HighEndSafeLockout from './components/descriptions/others/highEndSafeLockout';
import StorageFacilityLockPop from './components/descriptions/others/storageFacilityLockPop';
import store from './app/store'
import { Provider } from 'react-redux'





function App() {
  return ( 
    
     <Provider store={store}>
      <Router>
          <EntirePage/>
          <Switch>
            <Route path="/" exact component={Welcome}/>
            <Route path="/autokey" component={AutoKey}/>
            <Route path="/autolockout" component={AutoLockout}/>
            <Route path="/autolockoutkey" component={AutoLockoutKey}/>
            <Route path="/autoIgnition" component={AutoIgnition}/>
            <Route path="/homelockout" component={HomeLockout}/>
            <Route path="/homelockchange" component={HomeLockChange}/>
            <Route path="/homelockinstall" component={HomeLockInstall}/>
            <Route path="/homelockrepair" component={HomeLockRepair}/>
            <Route path="/homerekey" component={HomeRekey}/>
            <Route path="/businesslockout" component={BusinessLockout}/>
            <Route path="/businesslockchange" component={BusinessLockChange}/>
            <Route path="/businesslockinstall" component={BusinessLockInstall}/>
            <Route path="/businessrekey" component={BusinessRekey}/>
            <Route path="/basicsafelockout" component={BasicSafeLockout}/>
            <Route path="/highendsafelockout" component={HighEndSafeLockout}/>
            <Route path="/storagefacilitylockpop" component={StorageFacilityLockPop}/>
          </Switch>
      </Router>
      </Provider>
    
  );
}

export default App;
