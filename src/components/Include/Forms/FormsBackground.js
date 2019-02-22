import React from 'react';


export default (props) => {
    const { text } = props
    return (
        <Button color="primary">{`${text}...`}<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></Button>
    )
}
