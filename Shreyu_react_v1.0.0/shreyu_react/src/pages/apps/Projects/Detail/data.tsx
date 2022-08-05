// import project1 from '../../../../assets/images/projects/project-1.jpg';
// import project2 from '../../../../assets/images/projects/project-2.jpg';
// import project3 from '../../../../assets/images/projects/project-3.jpg';
// import project4 from '../../../../assets/images/projects/project-4.jpg';

interface Project {
    id: number;
    name: string;
    description: string;
    // image: string;
    status: any;
    action: any;
}

const projects: Project[] = [
    {
        id: 1,
        name: 'Display clear value proposition above the fold',
        description:'This is very hard to implement',
        // image: project1,
        status: <mark style={{background:"green", borderRadius:"5px", color:"white"}}>Completed</mark>,
        action: <div><i className="uil uil-edit-alt me-2" style={{background: "green", color:"white", borderRadius:"5px",padding:"2px"}}></i> <i className="uil uil-trash me-2" style={{background:"red", color:"white",borderRadius:"5px",padding:"2px"}}></i></div>
    },
    {
        id: 2,
        name: 'Show the breadth of the product catalog on homepage',
        description:'This is moderate to implement',
        // image: project2,
        status: <mark style={{background:"yellow", borderRadius:"5px", color:"white"}}>In Progress</mark>,
        action: <div><i className="uil uil-edit-alt me-2" style={{background: "green", color:"white", borderRadius:"5px", padding:"2px"}}></i> <i className="uil uil-trash me-2" style={{background:"red", color:"white", borderRadius:"5px",padding:"2px"}}></i></div>
    },
    {
        id: 3,
        name: 'Personalize homepage content',
        description:'This is very hard to implement',
        // image: project3,
        status: <mark style={{background:"pink", borderRadius:"5px", color:"white"}}>Panding</mark>,
        action: <div><i className="uil uil-edit-alt me-2" style={{background: "green", color:"white",borderRadius:"5px",padding:"2px"}}></i> <i className="uil uil-trash me-2" style={{background:"red", color:"white",borderRadius:"5px",padding:"2px"}}></i></div>
    },
    {
        id: 4,
        name: 'Stop autorotating carousel on hover or after any user interaction with it',
        description:'This is very easy to implement',
        // image: project4,
        status: <mark style={{background:"yellow", borderRadius:"5px", color:"white"}}>In Progrss</mark>,
        action: <div><i className="uil uil-edit-alt me-2" style={{background: "green", color:"white", borderRadius:"5px",padding:"2px"}}></i> <i className="uil uil-trash me-2" style={{background:"red", color:"white",borderRadius:"5px",padding:"2px"}}></i></div>
    },
];
export { projects};
