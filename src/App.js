import OwnUpPage from './pages/OwnUpPage'

/**
 * OwnUp App that should contain routes to all pages
 * @return {JSX} ownUp page
 */
const App = () => {
    let classname = 'ownUp'

    return  <div data-test={`${classname}-Page`} className={`${classname}-Page container`}>
            <OwnUpPage />
        </div>
};

export default App;