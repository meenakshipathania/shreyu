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
        // due_date: 'Today 4pm',
        stage: 'In-progress',
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
        </div>
      </div></div>
        
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
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
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
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
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
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
        </div>
      </div></div>
    },
];

const upcomingTasks: TaskItemTypes[] = [
    {
        id: 1,
        title: 'Make parent categories clickable',
        assigned_to: 'Arya Stark',
        assignee_avatar: avatarImg2,
        stage: 'Todo',
        priority: 'Low',
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
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
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
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
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
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
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
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
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
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
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
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
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
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
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
        </div>
      </div></div>
    },
];

const productTasks: TaskItemTypes[] = [
    {
        id: 1,
        title: 'Show no less than 3-5 high-quality images for all products',
        assigned_to: 'Arya Stark',
        assignee_avatar: avatarImg2,
        stage: 'Todo',
        priority: 'High',
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
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
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
        </div>
      </div></div>
    },
    {
        id: 3,
        title: 'Avoid dropdowns and show individual buttons for each available color, size etc.',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        stage: 'Done',
        priority: 'Medium',
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
        </div>
      </div></div>
    },
    {
        id: 4,
        title: 'Provide size chart with a measuring guide and international conversions',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        stage: 'Done',
        priority: 'Medium',
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button"
 data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
        </div>
      </div></div>
    },
    {
        id: 5,
        title: 'Show model size and fit',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        stage: 'Done',
        priority: 'Medium',
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
        </div>
      </div></div>
    },
    {
        id: 6,
        title: 'Suggest alternative and supplementary products',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        stage: 'Done',
        priority: 'Medium',
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
        </div>
      </div></div>
    },
    {
        id: 7,
        title: 'Indicate already purchased products',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        stage: 'Done',
        priority: 'Medium',
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
        </div>
      </div></div>
    },
    {
        id: 8,
        title: 'Promote alternatives if a product is permanently unavailable',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        stage: 'Done',
        priority: 'Medium',
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
        </div>
      </div></div>
    },
];

const otherTasks: TaskItemTypes[] = [
    {
        id: 1,
        title: 'Use visual indicators to highlight new, exclusive, top selling or items on sale',
        assigned_to: 'Arya Stark',
        assignee_avatar: avatarImg2,
        stage: 'Todo',
        priority: 'High',
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
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
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
        </div>
      </div></div>
    },
    {
        id: 3,
        title: 'Show additional product details on hovers',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        stage: 'Done',
        priority: 'Medium',
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
        </div>
      </div></div>
    },
    {
        id: 4,
        title: 'Order filters by importance, not alphabetically',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        stage: 'Done',
        priority: 'Medium',
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
        </div>
      </div></div>
    },
    {
        id: 5,
        title: 'Show number of matches for each filtering value',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        stage: 'Done',
        priority: 'Medium',
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
        </div>
      </div></div>
    },
    {
        id: 6,
        title: 'Display all applied filters both as summary at the top of the page and in their original position',
        assigned_to: 'Kevin C',
        assignee_avatar: avatarImg6,
        stage: 'Done',
        priority: 'Medium',
        list : <div id="accordion"><div className="card">
        <div className="card-header" id="heading-2">
          <h5 className="mb-0">
            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
              Item 2
            </a>
          </h5>
        </div>
        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
          <div className="card-body">
            Text 2
          </div>
        </div>
      </div></div>
    },
];

const allTasks = [...todayTasks, ...upcomingTasks, ...otherTasks, ...productTasks];

export { todayTasks, upcomingTasks, otherTasks, productTasks, allTasks };
