import Header from './components/Header'
import OwnUpPage from './pages/OwnUpPage'

const App = () => {
    let classname = 'ownUp'

    return (
        <div className={`${classname}-Page container`}>
            <Header title={`Rate Quote Coding Challenge`} />
            <OwnUpPage />
        </div>
    );

};

export default App;