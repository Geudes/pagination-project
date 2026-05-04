import React, { useContext, useEffect } from 'react'

import SpacesItems from './spaces-items'
import Loader from '../../../../widgets/loader/loader'
import { SpacesContext } from '../../provider/spaces-provider'

function Spaces() {
    const {spaces , getSpaces , spacesPopular,  getSpacesPopular ,loader } = useContext(SpacesContext)
    useEffect(() => {
        getSpaces()
        getSpacesPopular()
    }, [])
    if(loader){
        return <Loader />
    }
  return (
    <div>
         <h1>Spaces</h1>
        <div>
            <h1>ALL</h1>
            {spaces?.map(space => (
                <SpacesItems key={space.id} value={space} />
            ))}
        </div>
        <div>
            <h1>Popular</h1>
            {spacesPopular?.map(spacePopular => (
                <SpacesItems key={spacePopular.id} value={spacePopular} />
            ))}
        </div>
        
    </div>
  )
}

export default Spaces