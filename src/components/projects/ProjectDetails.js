import React from 'react';

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, provident dolores. Fugiat repellat consequuntur velit ipsam cumque mollitia earum commodi, praesentium quisquam porro. Blanditiis odit nulla nobis omnis nisi culpa!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Thor</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;