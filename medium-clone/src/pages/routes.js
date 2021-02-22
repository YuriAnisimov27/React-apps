import {Switch, Route} from 'react-router-dom';
import GlobalFeed from './globalFeed';
import Article from './article';


const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={GlobalFeed} exact/>
      <Route path='/articles/:slug' component={Article}/>
    </Switch>
  );
};

export default Routes;
