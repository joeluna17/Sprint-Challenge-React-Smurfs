import React from 'react';
import Smurf from './Smurf';



const EditSmurf = (props) => {
    console.log(props.smurfs)
    const id = props.match.params.id;
    const smurf = props.smurfs.find(smurf => id === `${smurf.id}`)
    return(
        <div>
        <div>
            <Smurf name={smurf.name} age={smurf.age} height={smurf.height}/>
        </div>

            <button className="button delete" onClick={(e)=> { return props.deletePost(e, smurf.id), props.history.push('/')}}> Delete Smurf</button>
          </div>  
    )

}

export default EditSmurf;