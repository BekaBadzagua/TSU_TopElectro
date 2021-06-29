import React from 'react'


const CenteredModal = (props: any) => {



    return (
        <div className="modal fade" id={props.id} role="dialog" aria-hidden={true} data-backdrop="static" data-keyboard="false" >
            <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: 800 }}>
                <div className="modal-content">
                    
                    {props.children}
                    {/* Children has  
                    <div className="modal-body">
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">დახურვა</button>
                        <button type="button" className="btn btn-primary">დამატება</button>
                    </div>
                    */}
                </div>
            </div>
        </div>
    )
}



export default CenteredModal 