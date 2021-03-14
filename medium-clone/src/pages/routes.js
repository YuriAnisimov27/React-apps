import {Switch, Route} from 'react-router-dom';
import GlobalFeed from './globalFeed';
import Article from './article';
import Authentication from './authentication';
import TagFeed from './tagFeed';
import YourFeed from './yourFeed';
import CreateArticle from './createArticle';
import EditArticle from './editArticle';


const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={GlobalFeed} exact/>
      <Route path='/articles/new' component={CreateArticle}/>
      <Route path='/articles/:slug/edit' component={EditArticle}/>
      <Route path='/feed' component={YourFeed}/>
      <Route path='/tags/:slug' component={TagFeed}/>
      <Route path='/login' component={Authentication}/>
      <Route path='/register' component={Authentication}/>
      <Route path='/articles/:slug' component={Article}/>
    </Switch>
  );
};

export default Routes;
