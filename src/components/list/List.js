import React from 'react';
import {Card ,CardBody ,CardTitle ,CardSubtitle ,CardText} from 'reactstrap'
function List({Data, k}) {
    return (
        <div>
            <h1>{k}</h1>
        </div>
    //     Data.map((o,i) => {
    //         return(
    //             <Card
    //             color="info"
    //           >
    //             <CardBody>
    //               <CardTitle tag="h5">
    //                 {o.name}
    //               </CardTitle>
    //               <CardSubtitle
    //                 className="mb-2 text-muted"
    //                 tag="h6"
    //               >
    //                {o.price}
    //               </CardSubtitle>
    //               <CardText>
    //                 {o.expiry}
    //               </CardText>
    //             </CardBody>
    //           </Card>
    //         )
    //     })
    );
}

export default List;