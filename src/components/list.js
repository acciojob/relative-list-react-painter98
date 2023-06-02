import React from 'react';

function List({list}){
    return (
        <ol key={'relativeList'}>
            {
                list.map((element,idx)=>{
                    return <li key={`relativeListItem${idx}`}>{element}</li>
                })
            }
        </ol>
    )

}
export default List;