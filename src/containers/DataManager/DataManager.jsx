import React from 'react'
import {getPlayerById} from '../../api/api'

const DataManager = (props) => {

    // let [playerById, setPlayerById] = useState(null)
    

    if(props.playersDetails !== undefined) {
        const ids = props.playersDetails.map((id) => {
            if (id.account_id !== null) {
                return id.account_id;
            }else {
                return "Anonymous";
            }
        })
        console.log(ids)

        
        const playersData = ids.map((pd) => {
            if(pd === "Anonymous") {
                return "Anonymous";
            } else {
                getPlayerById(pd)
                .then((res) => res.json())
                .then((data) => (data))

                // .then((data) => playerById(data));
                // return playerById;
            }
        })

        console.log(playersData);

        
            // if(ids !== undefined) {        
            //     getPlayerById( ids[0] == ("number") ? ids[0] : null )
            //         .then((res) => res.json())
            //         .then((data) => console.log(data))
                

            // }
        
        
        
        
        
        
        
        
        // const playersData = ids.map(function(playerById) {
        //     if(playerById === "Anonymous") {
        //             return "Anonymous";
        //     } else {
        //         getPlayerById(playerById)
        //         .then((res) => res.json())
        //         .then((data) => console.log(data));
                    
        //     }
        // })

        // console.log(playersData)
        
    }   
        
        
        
        
    //     {
    //         if(value.account_id) {
    //             console.log(value.account_id)
    //         } else {
    //             value = "Anonymous"
    //             console.log(value)
    //         }
    //         value += 1;
    //     }
    // }
    

    
    
    
    // Работа обращения к апи
    // if(props.playersDetails !== undefined) {        
    //     getPlayerById(props.playersDetails[0].account_id ? props.playersDetails[0].account_id : "Anon" )
    //         .then((res) => res.json())
    //         .then((data) => console.log(data))
        
    // }

    return <div>manager</div>
}

export default DataManager;

