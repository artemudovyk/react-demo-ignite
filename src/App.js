import GlobalStyles from './components/GlobalStyles';
import { Route } from 'react-router-dom';
// Pages
import HomePage from './pages/HomePage';

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Route path={['/games/:id/:slug/', '/']}>
                <HomePage />
            </Route>
        </div>
    );
}

export default App;
