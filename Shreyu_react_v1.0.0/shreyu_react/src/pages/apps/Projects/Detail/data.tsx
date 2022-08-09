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
        action: <div><button className="btn btn-success" ><i className="uil uil-edit-alt"></i></button> <button className="btn btn-danger"><i className="uil uil-trash"></i></button></div>
    },
    {
        id: 2,
        name: 'Show the breadth of the product catalog on homepage',
        description:'This is moderate to implement',
        // image: project2,
        status: <mark style={{background:"yellow", borderRadius:"5px", color:"white"}}>In Progress</mark>,
        action:<div><button className="btn btn-success" ><i className="uil uil-edit-alt"></i></button> <button className="btn btn-danger"><i className="uil uil-trash"></i></button></div>
    },
    {
        id: 3,
        name: 'Personalize homepage content',
        description:'This is very hard to implement',
        // image: project3,
        status: <mark style={{background:"pink", borderRadius:"5px", color:"white"}}>Panding</mark>,
        action: <div><button className="btn btn-success" ><i className="uil uil-edit-alt"></i></button> <button className="btn btn-danger"><i className="uil uil-trash"></i></button></div>
     },
    {
        id: 4,
        name: 'Stop autorotating carousel on hover or after any user interaction with it',
        description:'This is very easy to implement',
        // image: project4,
        status: <mark style={{background:"yellow", borderRadius:"5px", color:"white"}}>In Progrss</mark>,
        action: <div><button className="btn btn-success" ><i className="uil uil-edit-alt"></i></button> <button className="btn btn-danger"><i className="uil uil-trash"></i></button></div>
      },
];
export { projects};
