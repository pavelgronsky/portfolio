import React from 'react'
import {useRouteError} from 'react-router-dom'

const updateContainerStyles = {padding: '1rem', display: 'flex', justifyContent: 'center'}
const errorContainerStyles = {
    padding: '1rem', display: 'flex', justifyContent: 'center', color: 'red',
}

export const RootRouteErrorBoundary = () => {
    const error = useRouteError()

    if (error instanceof Error) {
        return <div style={errorContainerStyles}><pre>{error.message} {error.stack}</pre></div>
    }

    console.log('error', error)

    return <div style={errorContainerStyles}>Something went wrong</div>
}
