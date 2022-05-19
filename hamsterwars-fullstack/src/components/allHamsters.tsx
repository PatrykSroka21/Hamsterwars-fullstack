import React, {FunctionComponent} from 'react'


type hamstersProps = {
    header: string
}

export const allHamsters: FunctionComponent<hamstersProps> = ({header}) => 
    <> 
    <div>
        <h1>{header}</h1>
        
    </div>
    </>
