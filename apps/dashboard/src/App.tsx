import React from 'react'
import TopBar from 'pages/TopBar'
import SideBar from 'pages/SideBar'
import {ModernizedRouting} from 'router/ModernizedRouting'


const App = () => {
    return (
        <div className="flex">
            {/*<SideBar />
            <main>
                <TopBar />

            </main>*/}
            <ModernizedRouting />
        </div>
    )
}

export default App