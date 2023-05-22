import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import Database from './pages/Database'
import Links from './pages/Links'
import NotFound from './pages/NotFound'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <main className="main container my-5">
                        <Routes>
                            <Route
                                path="/"
                                element={<Database />}
                            />
                            <Route
                                path="/links"
                                element={<Links />}
                            />
                            <Route
                                path="*"
                                element={<NotFound />}
                            />
                        </Routes>
                    </main>
                </div>

            </BrowserRouter>
        </div>
    );
}

export default App;
