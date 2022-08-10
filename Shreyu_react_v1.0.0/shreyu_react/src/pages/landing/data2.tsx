// images
import avatarImg2 from '../../assets/images/users/avatar-9.jpg';
import avatarImg3 from '../../assets/images/users/avatar-3.jpg';
import avatarImg4 from '../../assets/images/users/avatar-4.jpg';
import avatarImg5 from '../../assets/images/users/avatar-5.jpg';
import avatarImg6 from '../../assets/images/users/avatar-6.jpg';


// import project1 from '../../../assets/images/projects/project-1.jpg';
// import project2 from '../../../assets/images/projects/project-2.jpg';

// interface ChecklistsItems {
//     id: number;
//     title: string;
//     completed: boolean;
// }

// interface AttachmentsItems {
//     id: number;
//     filename: string;
//     size: string;
//     image: string;
// }

// interface CommentsItems {
//     id: number;
//     author: string;
//     text: string;
//     posted_on: string;
//     author_avatar: string;
// }


export interface TaskItemTypes {
    id: number;
    title: string;
    priority: string;
    assigned_to: string;
    assignee_avatar: string;
    stage: string,
    list : any;
    // due_date: string;
    // completed: boolean;
    // checklists: Array<ChecklistsItems>;
    // description: string;
    // attachments: Array<AttachmentsItems>;
    // comments: Array<CommentsItems>;
}

const todayTasks: TaskItemTypes[] = [
    {
        id: 1,
        title: 'Display clear value proposition above the fold',
        priority: 'High',
        assigned_to: 'Arya Stark',
        assignee_avatar: avatarImg2,
        stage: 'In-progress',
        list : <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#demo" role="button" aria-expanded="false" aria-controls="demo">
         <i className='uil uil-angle-down'></i>
        </a>
      <div className="collapse" id="demo">
        <div className="card card-body">
          fgfgfg
        </div>
      </div></span>
      
        
        // checklists: [
        //     { id: 1, title: 'Find out the old contract documents', completed: false },
        //     {
        //         id: 2,
        //         title: 'Organize meeting sales associates to understand need in detail',
        //         completed: true,
        //     },
        //     {
        //         id: 3,
        //         title: 'Make sure to cover every small details',
        //         completed: true,
        //     },
        // ],
        // attachments: [
        //             { id: 1, filename: 'sales-assets.zip', size: '2.3 MB', image: project1 },
        //             { id: 2, filename: 'new-contarcts.docx', size: '1.3 MB', image: project2 },
        //         ],
        // comments: [
        //     {
        //         id: 1,
        //         author: 'Arya Sta{rk',
        //         text: 'Should I review the last 3 years legal documents as well?',
        //         posted_on: '4:30am',
        //         author_avatar: avatarImg2,
        //     },
        //     {
        //         id: 2,
        //         author: 'Gary Somya',
        //         text: '@Arya FYI..I have created some general guidelines last year.',
        //         posted_on: '3:30am',
        //         author_avatar: avatarImg3,
        //     },
        // ],

  
    },
    {
        id: 2,
        title: 'Show the breadth of the product catalog on homepage',
        priority: 'High',
        assigned_to: 'James B',
        assignee_avatar: avatarImg3,
        // due_date: 'Today 4pm',
        stage: 'In-progress',
        list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <i className='uil uil-angle-down'></i>
       </a>
     </p>
     <div className="collapse" id="collapseExample">
       <div className="card card-body">
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
       </div>
     </div></div>
        
    //     checklists: [
    //         { id: 1, title: 'Find out the old contract documents', completed: false },
    //         {
    //             id: 2,
    //             title: 'Organize meeting sales associates to understand need in detail',
    //             completed: true,
    //         },
    //         {
    //             id: 3,
    //             title: 'Make sure to cover every small details',
    //             completed: true,
    //         },
    //     ],
    //     attachments: [
    //         { id: 1, filename: 'sales-assets.zip', size: '2.3 MB', image: project1 },
    //         { id: 2, filename: 'new-contarcts.docx', size: '1.3 MB', image: project2 },
    //     ],
    //     comments: [
    //         {
    //             id: 1,
    //             author: 'Arya Stark',
    //             text: 'Should I review the last 3 years legal documents as well?',
    //             posted_on: '4:30am',
    //             author_avatar: avatarImg2,
    //         },
    //         {
    //             id: 2,
    //             author: 'Gary Somya',
    //             text: '@Arya FYI..I have created some general guidelines last year.',
    //             posted_on: '3:30am',
    //             author_avatar: avatarImg3,
    //         },
    //     ],
    },
    {
        id: 3,
        title: 'Personalize homepage content',
        priority: 'Medium',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg4,
        stage: 'In-progress',
        list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <i className='uil uil-angle-down'></i>
       </a>
     </p>
     <div className="collapse" id="collapseExample">
       <div className="card card-body">
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
       </div>
     </div></div>
    },
    {
        id: 4,
        title: 'Stop autorotating carousel on hover or after any user interaction with it',
        priority: 'Medium',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg4,
        stage: 'In-progress',
        list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <i className='uil uil-angle-down'></i>
       </a>
     </p>
     <div className="collapse" id="collapseExample">
       <div className="card card-body">
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
       </div>
     </div></div>
    }
];

const upcomingTasks: TaskItemTypes[] = [
    {
        id: 1,
        title: 'Make parent categories clickable',
        assigned_to: 'Arya Stark',
        assignee_avatar: avatarImg2,
        stage: 'Todo',
        priority: 'Low',
        list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <i className='uil uil-angle-down'></i>
       </a>
     </p>
     <div className="collapse" id="collapseExample">
       <div className="card card-body">
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
       </div>
     </div></div>
    },
    {
        id: 2,
        title: 'Navigation hierarchy should be reflected visually',
        assigned_to: 'James B',
        assignee_avatar: avatarImg5,
        stage: 'Review',
        priority: 'Low',
        list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <i className='uil uil-angle-down'></i>
       </a>
     </p>
     <div className="collapse" id="collapseExample">
       <div className="card card-body">
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
       </div>
     </div></div>
    },
    {
        id: 3,
        title: 'Avoid site-specific category naming',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        stage: 'Review',
        priority: 'Medium',
        list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <i className='uil uil-angle-down'></i>
       </a>
     </p>
     <div className="collapse" id="collapseExample">
       <div className="card card-body">
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
       </div>
     </div></div>
    },
    {
        id: 4,
        title: 'Show “New” and “Sale” as separate categories',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        stage: 'Review',
        priority: 'Medium',
        list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <i className='uil uil-angle-down'></i>
       </a>
     </p>
     <div className="collapse" id="collapseExample">
       <div className="card card-body">
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
       </div>
     </div></div>
    },
    {
        id: 5,
        title: 'Show popular filters as subcategories',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        stage: 'Review',
        priority: 'Medium',
        list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <i className='uil uil-angle-down'></i>
       </a>
     </p>
     <div className="collapse" id="collapseExample">
       <div className="card card-body">
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
       </div>
     </div></div>
    },
    {
        id: 6,
        title: 'Display key contact information',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        stage: 'Review',
        priority: 'Medium',
        list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <i className='uil uil-angle-down'></i>
       </a>
     </p>
     <div className="collapse" id="collapseExample">
       <div className="card card-body">
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
       </div>
     </div></div>
    },
    {
        id: 7,
        title: 'Display store or location icon (if offline sales is important)',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        stage: 'Review',
        priority: 'Medium',
        list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <i className='uil uil-angle-down'></i>
       </a>
     </p>
     <div className="collapse" id="collapseExample">
       <div className="card card-body">
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
       </div>
     </div></div>
    },
    {
        id: 8,
        title: 'Logo should always link to homepage',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        stage: 'Review',
        priority: 'Medium',
        list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <i className='uil uil-angle-down'></i>
       </a>
     </p>
     <div className="collapse" id="collapseExample">
       <div className="card card-body">
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
       </div>
     </div></div>
    },
];

const Searching: TaskItemTypes[] = [
  {
      id: 1,
      title: 'Make search box prominent',
      assigned_to: 'Arya Stark',
      assignee_avatar: avatarImg2,
      stage: 'Todo',
      priority: 'Low',
      list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
      <i className='uil uil-angle-down'></i>
     </a>
   </p>
   <div className="collapse" id="collapseExample">
     <div className="card card-body">
       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
     </div>
   </div></div>
  },
  {
      id: 2,
      title: 'Use autocomplete with error-correction',
      assigned_to: 'James B',
      assignee_avatar: avatarImg5,
      stage: 'Review',
      priority: 'Low',
      list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
      <i className='uil uil-angle-down'></i>
     </a>
   </p>
   <div className="collapse" id="collapseExample">
     <div className="card card-body">
       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
     </div>
   </div></div>
  },
  {
    id: 3,
    title: 'Show search history',
    assigned_to: 'James B',
    assignee_avatar: avatarImg5,
    stage: 'Review',
    priority: 'Low',
    list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 </p>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
   </div>
 </div></div>
},
  {
      id: 4,
      title: 'Avoid zero results pages',
      assigned_to: 'Kevin C',
      assignee_avatar: avatarImg6,
      stage: 'Review',
      priority: 'Medium',
      list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
      <i className='uil uil-angle-down'></i>
     </a>
   </p>
   <div className="collapse" id="collapseExample">
     <div className="card card-body">
       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
     </div>
   </div></div>
  },
  {
      id: 5,
      title: 'Display the total number of results',
      assigned_to: 'Kevin C',
      assignee_avatar: avatarImg6,
      stage: 'Review',
      priority: 'Medium',
      list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
      <i className='uil uil-angle-down'></i>
     </a>
   </p>
   <div className="collapse" id="collapseExample">
     <div className="card card-body">
       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
     </div>
   </div></div>
  },
];


const productlist: TaskItemTypes[] = [
  {
    id: 1,
    title: 'Use visual indicators to highlight new, exclusive, top selling or items on sale',
    assigned_to: 'Arya Stark',
    assignee_avatar: avatarImg2,
    stage: 'Todo',
    priority: 'Low',
    list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 </p>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
   </div>
 </div></div>
},
{
    id: 2,
    title: 'Display product variations such as available colors, styles or options',
    assigned_to: 'James B',
    assignee_avatar: avatarImg5,
    stage: 'Review',
    priority: 'Low',
    list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 </p>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
   </div>
 </div></div>
},
{
  id: 3,
  title: 'Show additional product details on hover',
  assigned_to: 'James B',
  assignee_avatar: avatarImg5,
  stage: 'Review',
  priority: 'Low',
  list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  <i className='uil uil-angle-down'></i>
 </a>
</p>
<div className="collapse" id="collapseExample">
 <div className="card card-body">
   Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
 </div>
</div></div>
},
{
    id: 4,
    title: 'Order filters by importance, not alphabetically',
    assigned_to: 'Kevin C',
    assignee_avatar: avatarImg6,
    stage: 'Review',
    priority: 'Medium',
    list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 </p>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
   </div>
 </div></div>
},
{
    id: 5,
    title: 'Show number of matches for each filtering value',
    assigned_to: 'Kevin C',
    assignee_avatar: avatarImg6,
    stage: 'Review',
    priority: 'Medium',
    list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 </p>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
   </div>
 </div></div>
},
{
  id: 6,
  title: 'Display all applied filters both as summary at the top of the page and in their original position',
  assigned_to: 'Kevin C',
  assignee_avatar: avatarImg6,
  stage: 'Review',
  priority: 'Medium',
  list :<div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  <i className='uil uil-angle-down'></i>
 </a>
</p>
<div className="collapse" id="collapseExample">
 <div className="card card-body">
   Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
 </div>
</div></div>
},
];

const page: TaskItemTypes[] = [
  {
    id: 1,
    title: 'Show no less than 3-5 high-quality images for all products',
    assigned_to: 'Arya Stark',
    assignee_avatar: avatarImg2,
    stage: 'Todo',
    priority: 'Low',
    list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 </p>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
   </div>
 </div></div>
},
{
    id: 2,
    title: 'Use thumbnails, not indicators to show product images',
    assigned_to: 'James B',
    assignee_avatar: avatarImg5,
    stage: 'Review',
    priority: 'Low',
    list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
         <i className='uil uil-angle-down'></i>
        </a>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div></div>
},
{
  id: 3,
  title: 'Avoid dropdowns and show individual buttons for each available color, size etc.',
  assigned_to: 'James B',
  assignee_avatar: avatarImg5,
  stage: 'Review',
  priority: 'Low',
  list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  <i className='uil uil-angle-down'></i>
 </a>
</p>
<div className="collapse" id="collapseExample">
 <div className="card card-body">
   Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
 </div>
</div></div>
},
{
    id: 4,
    title: 'Provide size chart with a measuring guide and international conversions',
    assigned_to: 'Kevin C',
    assignee_avatar: avatarImg6,
    stage: 'Review',
    priority: 'Medium',
    list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
  </p>
  <div className="collapse" id="collapseExample">
   <div className="card card-body">
     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
   </div>
  </div></div>
},
{
    id: 5,
    title: 'Show model size and fit',
    assigned_to: 'Kevin C',
    assignee_avatar: avatarImg6,
    stage: 'Review',
    priority: 'Medium',
    list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
  </p>
  <div className="collapse" id="collapseExample">
   <div className="card card-body">
     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
   </div>
  </div></div>
},
{
  id: 6,
  title: 'Suggest alternative and supplementary products',
  assigned_to: 'Kevin C',
  assignee_avatar: avatarImg6,
  stage: 'Review',
  priority: 'Medium',
  list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  <i className='uil uil-angle-down'></i>
 </a>
</p>
<div className="collapse" id="collapseExample">
 <div className="card card-body">
   Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
 </div>
</div></div>
},
{
  id: 7,
  title: 'Indicate already purchased products',
  assigned_to: 'Kevin C',
  assignee_avatar: avatarImg6,
  stage: 'Review',
  priority: 'Medium',
  list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  <i className='uil uil-angle-down'></i>
 </a>
</p>
<div className="collapse" id="collapseExample">
 <div className="card card-body">
   Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
 </div>
</div></div>
},
{
  id: 8,
  title: 'Promote alternatives if a product is permanently unavailable',
  assigned_to: 'Kevin C',
  assignee_avatar: avatarImg6,
  stage: 'Review',
  priority: 'Medium',
  list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  <i className='uil uil-angle-down'></i>
 </a>
</p>
<div className="collapse" id="collapseExample">
 <div className="card card-body">
   Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
 </div>
</div></div>
},
];

const cart: TaskItemTypes[] = [
  {
    id: 1,
    title: 'Show dropdown cart or pop-up instead of redirecting to cart after a user adds an item',
    assigned_to: 'Arya Stark',
    assignee_avatar: avatarImg2,
    stage: 'Todo',
    priority: 'Low',
    list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
  </p>
  <div className="collapse" id="collapseExample">
   <div className="card card-body">
     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
   </div>
  </div></div>
},
{
    id: 2,
    title: 'Allow users to edit item in cart',
    assigned_to: 'James B',
    assignee_avatar: avatarImg5,
    stage: 'Review',
    priority: 'Low',
    list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
  </p>
  <div className="collapse" id="collapseExample">
   <div className="card card-body">
     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
   </div>
  </div></div>
},
{
  id: 3,
  title: 'Allow users to move items to favorites or wishlist',
  assigned_to: 'James B',
  assignee_avatar: avatarImg5,
  stage: 'Review',
  priority: 'Low',
  list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  <i className='uil uil-angle-down'></i>
 </a>
</p>
<div className="collapse" id="collapseExample">
 <div className="card card-body">
   Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
 </div>
</div></div>
},
{
    id: 4,
    title: 'Show similar items or favorites for upsell in cart',
    assigned_to: 'Kevin C',
    assignee_avatar: avatarImg6,
    stage: 'Review',
    priority: 'Medium',
    list : <div><p><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
  </p>
  <div className="collapse" id="collapseExample">
   <div className="card card-body">
     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
   </div>
  </div></div>
},
{
    id: 5,
    title: 'Show total cost (including shipping, taxes and fees)',
    assigned_to: 'Kevin C',
    assignee_avatar: avatarImg6,
    stage: 'Review',
    priority: 'Medium',
    list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     fgfgfg
   </div>
 </div></span>
},
{
  id: 6,
  title: 'Consider offering free shipping on a certain amount',
  assigned_to: 'Kevin C',
  assignee_avatar: avatarImg6,
  stage: 'Review',
  priority: 'Medium',
  list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  <i className='uil uil-angle-down'></i>
 </a>
<div className="collapse" id="collapseExample">
 <div className="card card-body">
   fgfgfg
 </div>
</div></span>
},
];

const Checkout: TaskItemTypes[] = [
  {
    id: 1,
    title: 'Always allow a user to complete checkout as a guest',
    assigned_to: 'Arya Stark',
    assignee_avatar: avatarImg2,
    stage: 'Todo',
    priority: 'Low',
    list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     fgfgfg
   </div>
 </div></span>
},
{
    id: 2,
    title: 'Limit exit points during checkout',
    assigned_to: 'James B',
    assignee_avatar: avatarImg5,
    stage: 'Review',
    priority: 'Low',
    list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     fgfgfg
   </div>
 </div></span>
},
{
  id: 3,
  title: 'Place labels above input fields',
  assigned_to: 'James B',
  assignee_avatar: avatarImg5,
  stage: 'Review',
  priority: 'Low',
  list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  <i className='uil uil-angle-down'></i>
 </a>
<div className="collapse" id="collapseExample">
 <div className="card card-body">
   fgfgfg
 </div>
</div></span>
},
{
    id: 4,
    title: 'Avoid multi-column layouts',
    assigned_to: 'Kevin C',
    assignee_avatar: avatarImg6,
    stage: 'Review',
    priority: 'Medium',
    list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     fgfgfg
   </div>
 </div></span>
},
{
    id: 5,
    title: 'Show progress bar if there are more than 2 steps in checkout',
    assigned_to: 'Kevin C',
    assignee_avatar: avatarImg6,
    stage: 'Review',
    priority: 'Medium',
    list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     fgfgfg
   </div>
 </div></span>
},
{
  id: 6,
  title: 'Auto-format spaces in credit card number',
  assigned_to: 'Kevin C',
  assignee_avatar: avatarImg6,
  stage: 'Review',
  priority: 'Medium',
  list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  <i className='uil uil-angle-down'></i>
 </a>
<div className="collapse" id="collapseExample">
 <div className="card card-body">
   fgfgfg
 </div>
</div></span>
},
{
  id: 7,
  title: 'Show tooltip of the card security code placement',
  assigned_to: 'Kevin C',
  assignee_avatar: avatarImg6,
  stage: 'Review',
  priority: 'Medium',
  list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  <i className='uil uil-angle-down'></i>
 </a>
<div className="collapse" id="collapseExample">
 <div className="card card-body">
   fgfgfg
 </div>
</div></span>
},
{
  id: 8,
  title: 'Allow users to create account after checkout',
  assigned_to: 'Kevin C',
  assignee_avatar: avatarImg6,
  stage: 'Review',
  priority: 'Medium',
  list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  <i className='uil uil-angle-down'></i>
 </a>
<div className="collapse" id="collapseExample">
 <div className="card card-body">
   fgfgfg
 </div>
</div></span>
},
];

const Account: TaskItemTypes[] = [
  {
    id: 1,
    title: 'Display the benefits of creating an account',
    assigned_to: 'Arya Stark',
    assignee_avatar: avatarImg2,
    stage: 'Todo',
    priority: 'Low',
    list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     fgfgfg
   </div>
 </div></span>
},
{
    id: 2,
    title: 'Display all password requirements upfront',
    assigned_to: 'James B',
    assignee_avatar: avatarImg5,
    stage: 'Review',
    priority: 'Low',
    list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     fgfgfg
   </div>
 </div></span>
},
{
  id: 3,
  title: 'Include “Unsubscribe from all” button, if there are multiple newsletters',
  assigned_to: 'James B',
  assignee_avatar: avatarImg5,
  stage: 'Review',
  priority: 'Low',
  list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  <i className='uil uil-angle-down'></i>
 </a>
<div className="collapse" id="collapseExample">
 <div className="card card-body">
   fgfgfg
 </div>
</div></span>
},
{
    id: 4,
    title: 'Make default address label prominent',
    assigned_to: 'Kevin C',
    assignee_avatar: avatarImg6,
    stage: 'Review',
    priority: 'Medium',
    list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     fgfgfg
   </div>
 </div></span>
},
];

const Mobile: TaskItemTypes[] = [
  {
    id: 1,
    title: 'Support mobile gestures',
    assigned_to: 'Arya Stark',
    assignee_avatar: avatarImg2,
    stage: 'Todo',
    priority: 'Low',
    list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     fgfgfg
   </div>
 </div></span>
},
{
    id: 2,
    title: 'Display order summary at the top of the checkout page',
    assigned_to: 'James B',
    assignee_avatar: avatarImg5,
    stage: 'Review',
    priority: 'Low',
    list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     fgfgfg
   </div>
 </div></span>
},
{
  id: 3,
  title: 'Match the keyboard with input type',
  assigned_to: 'James B',
  assignee_avatar: avatarImg5,
  stage: 'Review',
  priority: 'Low',
  list : <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  <i className='uil uil-angle-down'></i>
 </a>
<div className="collapse" id="collapseExample">
 <div className="card card-body">
   fgfgfg
 </div>
</div></span>
},
{
    id: 4,
    title: 'Allow users to scan credit card',
    assigned_to: 'Kevin C',
    assignee_avatar: avatarImg6,
    stage: 'Review',
    priority: 'Medium',
    list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     fgfgfg
   </div>
 </div></span>
},
{
    id: 5,
    title: 'Determine delivery costs by asking the user’s current location',
    assigned_to: 'Kevin C',
    assignee_avatar: avatarImg6,
    stage: 'Review',
    priority: 'Medium',
    list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    <i className='uil uil-angle-down'></i>
   </a>
 <div className="collapse" id="collapseExample">
   <div className="card card-body">
     fgfgfg
   </div>
 </div></span>
},
{
  id: 6,
  title: 'Deemphasize or do not show “Install app” banner',
  assigned_to: 'Kevin C',
  assignee_avatar: avatarImg6,
  stage: 'Review',
  priority: 'Medium',
  list :  <span><a style={{fontSize:"175%"}} data-toggle="collapse" href="#demo" role="button" aria-expanded="false" aria-controls="demo">
  <i className='uil uil-angle-down'></i>
 </a>
<div className="collapse" id="demo">
 <div className="card card-body">
   fgfgfg
 </div>
</div></span>
},
];

const allTasks = [...todayTasks, ...upcomingTasks, ...Searching, productlist, ...page, ...cart, ...Checkout, ...Account, ...Mobile];

export { todayTasks, upcomingTasks, Searching, productlist, page, cart, Checkout, Account, Mobile, allTasks };
