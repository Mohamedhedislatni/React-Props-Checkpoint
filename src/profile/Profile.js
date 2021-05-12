import React from 'react'
import PropTypes from 'prop-types'
function Profile({name="Name Here",age="Age Here",pro="Profession Here", alrt}) {
    const styleObject = {textAlign:"center",fontSize: "60px", background:"cyan", color:"white",paddingTop : '0px'}
    return (
        <div style = {styleObject}>
            <p>
                Hello! I'm {name}, a {age} years old, and i'm a {pro} in Go My Code Gabes.
                
            </p>
            {alrt(name)}
            <div>
            <img src='https://www.disruptunisia.com/images/5adf3627dba7e.jpg' alt="image"/>
            </div>
        </div>
    )
}
Profile.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    pro:PropTypes.string
}
export default Profile
