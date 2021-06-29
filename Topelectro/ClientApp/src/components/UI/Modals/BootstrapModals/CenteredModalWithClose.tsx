import React from 'react'


const CenteredModalWithClose = (props: any) => {
    return (
        <div className="modal fade" id={props.id} role="dialog" aria-hidden={true}  >
            <div className="modal-dialog modal-dialog-centered" role="document" style={{maxWidth:800}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.header}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {props.children}

                </div>
            </div>
        </div>
    )
}



export default CenteredModalWithClose 