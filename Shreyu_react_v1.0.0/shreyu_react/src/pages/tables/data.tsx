interface Records {
    id: number;
    guidlines: string;
    implementation: any;
    impact: any;
    edit: any;
    delete: any;
}

// interface ExpandableRecords {
//     id: number;
//     guidlines: string;
//     implementation: string;
//     impact: string;
//     subRows: Records[];
// }

const records: Records[] = [
    {
        id: 1,
        guidlines: 'Homepage',
        implementation: <mark style={{background:"pink", borderRadius:"5px", color:"#e63453"}}>High</mark>,
        impact: <mark style={{background:"lightgreen", borderRadius:"5px", color:"green"}}>Easy</mark>,
        edit: <mark style={{background:"pink", borderRadius:"5px", color:"white"}}>Panding</mark>,
        delete: <div><button className="btn btn-success" ><i className="uil uil-edit-alt"></i></button> <button className="btn btn-danger"><i className="uil uil-trash"></i></button></div>
    },
    {
        id: 2,
        guidlines: 'Navigation',
        implementation: <mark style={{background:"lightgreen", borderRadius:"5px", color:"green"}}>Easy</mark>,
        impact: <mark style={{background:"grey", borderRadius:"5px", color:"white"}}>Medium</mark>,
        edit: <mark style={{background:"green", borderRadius:"5px", color:"white"}}>Completed</mark>,
        delete: <div><button className="btn btn-success" ><i className="uil uil-edit-alt"></i></button> <button className="btn btn-danger"><i className="uil uil-trash"></i></button></div>
    },
    {
        id: 3,
        guidlines: 'Search',
        implementation: <mark style={{background:"pink", borderRadius:"5px", color:"#e63453"}}>High</mark>,
        impact: <mark style={{background:"lightgreen", borderRadius:"5px", color:"green"}}>Easy</mark>,
        edit: <mark style={{background:"yellow", borderRadius:"5px", color:"white"}}>In Progress</mark>,
        delete: <div><button className="btn btn-success" ><i className="uil uil-edit-alt"></i></button> <button className="btn btn-danger"><i className="uil uil-trash"></i></button></div>
    },
    {
        id: 4,
        guidlines: 'Product List',
        implementation: <mark style={{background:"lightgreen", borderRadius:"5px", color:"green"}}>Easy</mark>,
        impact: <mark style={{background:"lightgreen", borderRadius:"5px", color:"green"}}>Easy</mark>,
        edit: <mark style={{background:"pink", borderRadius:"5px", color:"white"}}>Panding</mark>,
        delete: <div><button className="btn btn-success" ><i className="uil uil-edit-alt"></i></button> <button className="btn btn-danger"><i className="uil uil-trash"></i></button></div>
    },
    {
        id: 5,
        guidlines: 'Product Page',
        implementation: <mark style={{background:"pink", borderRadius:"5px", color:"#e63453"}}>High</mark>,
        impact: <mark style={{background:"grey", borderRadius:"5px", color:"white"}}>Medium</mark>,
        edit: <mark style={{background:"yellow", borderRadius:"5px", color:"white"}}>In Progress</mark>,
        delete: <div><button className="btn btn-success" ><i className="uil uil-edit-alt"></i></button> <button className="btn btn-danger"><i className="uil uil-trash"></i></button></div>
    },
    {
        id: 6,
        guidlines: 'Cart',
        implementation: <mark style={{background:"pink", borderRadius:"5px", color:"#e63453"}}>High</mark>,
        impact: <mark style={{background:"lightgreen", borderRadius:"5px", color:"green"}}>Easy</mark>,
         edit: <mark style={{background:"pink", borderRadius:"5px", color:"white"}}>Panding</mark>,
        delete: <div><button className="btn btn-success" ><i className="uil uil-edit-alt"></i></button> <button className="btn btn-danger"><i className="uil uil-trash"></i></button></div>
    },
    {
        id: 7,
        guidlines: 'Checkout',
        implementation: <mark style={{background:"lightgreen", borderRadius:"5px", color:"green"}}>Easy</mark>,
        impact: <mark style={{background:"lightgreen", borderRadius:"5px", color:"green"}}>Easy</mark>,
         edit: <mark style={{background:"yellow", borderRadius:"5px", color:"white"}}>In Progress</mark>,
        delete: <div><a href="../projects/details"><button className="btn btn-success" ><i className="uil uil-edit-alt"></i></button></a> <button className="btn btn-danger"><i className="uil uil-trash"></i></button></div>
    },
    {
        id: 8,
        guidlines: 'Account',
        implementation: <mark style={{background:"grey", borderRadius:"5px", color:"white"}}>Medium</mark>,
        impact: <mark style={{background:"lightgreen", borderRadius:"5px", color:"green"}}>Easy</mark>,
         edit: <mark style={{background:"green", borderRadius:"5px", color:"white"}}>Completed</mark>,
        delete: <div><button className="btn btn-success" ><i className="uil uil-edit-alt"></i></button> <button className="btn btn-danger"><i className="uil uil-trash"></i></button></div>
    },
    {
        id: 9,
        guidlines: 'Mobile',
        implementation: <mark style={{background:"grey", borderRadius:"5px", color:"white"}}>Medium</mark>,
        impact: <mark style={{background:"lightgreen", borderRadius:"5px", color:"green"}}>Easy</mark>,
         edit: <mark style={{background:"yellow", borderRadius:"5px", color:"white"}}>In Progress</mark>,
        delete: <div><button className="btn btn-success" ><i className="uil uil-edit-alt"></i></button> <button className="btn btn-danger"><i className="uil uil-trash"></i></button></div>
    },
    // {
    //     id: 10,
    //     guidlines: 'dgdsgj',
    //     implementation: 'Juana',
    //     impact: 'Singavera',
    //      edit: <a href="../projects/details"><button className="btn btn-success" >Edit</button></a>,
    //     delete: <button className="btn btn-danger">Delete</button>
    // },
    // {
    //     id: 11,
    //     guidlines: 'dgdsgj',
    //     implementation: 'Fitzgerald',
    //     impact: 'Dancerity',
    //      edit: <a href="../projects/details"><button className="btn btn-success" >Edit</button></a>,
    //     delete: <button className="btn btn-danger">Delete</button>
    // },
    // {
    //     id: 12,
    //     guidlines: 'fgdfgfd',
    //     implementation: 'Madden',
    //     impact: 'Corpulse',
    //      edit: <a href="../projects/details"><button className="btn btn-success" >Edit</button></a>,
    //     delete: <button className="btn btn-danger">Delete</button>
    // },
    // {
    //     id: 13,
    //     guidlines: 'fgf',
    //     implementation: 'Jewell',
    //     impact: 'Frenex',
    //      edit: <a href="../projects/details"><button className="btn btn-success" >Edit</button></a>,
    //     delete: <button className="btn btn-danger">Delete</button>
    // },
    // {
    //     id: 14,
    //     guidlines: 'fgdfg',
    //     implementation: 'Kerr',
    //     impact: <mark>'Artiq'</mark>,
    //     edit:<a href="../projects/details"><button className="btn btn-success" >Edit</button></a>,
    //     delete: <button className="btn btn-danger">Delete</button>
        
    // },
    // {
    //     id: 15,
    //     guidlines: 'gfdgfd',
    //     implementation: 'Washington',
    //     impact: 'Organica',
    //     edit: <a href="../projects/details"><button className="btn btn-success" >Edit</button></a>,
    //     delete: <button className="btn btn-danger">Delete</button>
        
    // },
    // {
    //     id: 16,
    //     guidlines: 20,
//         implementation: 'Audrey',
//         impact: 'Softmicro',
//         phone: '+1 (900) 592-3841',
//     },
//     {
//         id: 17,
//         guidlines: 39,
//         implementation: 'Allison',
//         impact: 'Playce',
//         phone: '+1 (998) 478-3810',
//     },
//     {
//         id: 18,
//         guidlines: 25,
//         implementation: 'Holder',
//         impact: 'Paragonia',
//         phone: '+1 (850) 536-2708',
//     },
//     {
//         id: 19,
//         guidlines: 26,
//         implementation: 'Atkinson',
//         impact: 'Scentric',
//         phone: '+1 (850) 467-2761',
//     },
//     {
//         id: 20,
//         guidlines: 35,
//         implementation: 'Delaney',
//         impact: 'Telpod',
//         phone: '+1 (934) 468-2218',
//     },
//     {
//         id: 21,
//         guidlines: 20,
//         implementation: 'Myrna',
//         impact: 'Zanity',
//         phone: '+1 (953) 565-3836',
//     },
//     {
//         id: 22,
//         guidlines: 30,
//         implementation: 'Erna',
//         impact: 'Techade',
//         phone: '+1 (872) 574-3879',
//     },
//     {
//         id: 23,
//         guidlines: 36,
//         implementation: 'Fannie',
//         impact: 'Cubix',
//         phone: '+1 (843) 576-2904',
//     },
//     {
//         id: 24,
//         guidlines: 38,
//         implementation: 'Melody',
//         impact: 'Talae',
//         phone: '+1 (817) 424-3500',
//     },
//     {
//         id: 25,
//         guidlines: 27,
//         implementation: 'Letitia',
//         impact: 'Enjola',
//         phone: '+1 (857) 441-2917',
//     },
//     {
//         id: 26,
//         guidlines: 33,
//         implementation: 'Nina',
//         impact: 'Eventex',
//         phone: '+1 (917) 599-2793',
//     },
//     {
//         id: 27,
//         guidlines: 40,
//         implementation: 'Byrd',
//         impact: 'Obones',
//         phone: '+1 (846) 422-2064',
//     },
//     {
//         id: 28,
//         guidlines: 34,
//         implementation: 'Chen',
//         impact: 'Dadabase',
//         phone: '+1 (956) 474-3409',
//     },
//     {
//         id: 29,
//         guidlines: 25,
//         implementation: 'Alexandria',
//         impact: 'Turnabout',
//         phone: '+1 (964) 415-2278',
//     },
//     {
//         id: 30,
//         guidlines: 37,
//         implementation: 'Pguidlines',
//         impact: 'Metroz',
//         phone: '+1 (897) 541-2460',
//     },
//     {
//         id: 31,
//         guidlines: 24,
//         implementation: 'Clare',
//         impact: 'Zilch',
//         phone: '+1 (832) 591-3814',
//     },
//     {
//         id: 32,
//         guidlines: 38,
//         implementation: 'Lindsey',
//         impact: 'Roughies',
//         phone: '+1 (942) 579-2920',
//     },
//     {
//         id: 33,
//         guidlines: 32,
//         implementation: 'Oconnor',
//         impact: 'Kinetica',
//         phone: '+1 (899) 599-3206',
//     },
//     {
//         id: 34,
//         guidlines: 35,
//         implementation: 'Maldonado',
//         impact: 'Zentime',
//         phone: '+1 (955) 419-2815',
//     },
//     {
//         id: 35,
//         guidlines: 25,
//         implementation: 'Day',
//         impact: 'Eargo',
//         phone: '+1 (895) 555-2916',
//     },
//     {
//         id: 36,
//         guidlines: 20,
//         implementation: 'Collier',
//         impact: 'Phuel',
//         phone: '+1 (998) 468-2079',
//     },
//     {
//         id: 37,
//         guidlines: 40,
//         implementation: 'Jeannette',
//         impact: 'Entogrok',
//         phone: '+1 (904) 567-2078',
//     },
//     {
//         id: 38,
//         guidlines: 33,
//         implementation: 'Wallace',
//         impact: 'Nurali',
//         phone: '+1 (877) 566-3957',
//     },
//     {
//         id: 39,
//         guidlines: 39,
//         implementation: 'Mcfadden',
//         impact: 'Cincyr',
//         phone: '+1 (949) 405-3992',
//     },
//     {
//         id: 40,
//         guidlines: 21,
//         implementation: 'Chrystal',
//         impact: 'Futurize',
//         phone: '+1 (988) 458-3032',
//     },
//     {
//         id: 41,
//         guidlines: 31,
//         implementation: 'Leila',
//         impact: 'Zensure',
//         phone: '+1 (902) 447-2419',
//     },
//     {
//         id: 42,
//         guidlines: 24,
//         implementation: 'Madelyn',
//         impact: 'Egypto',
//         phone: '+1 (881) 538-3081',
//     },
//     {
//         id: 43,
//         guidlines: 39,
//         implementation: 'Peck',
//         impact: 'Tellifly',
//         phone: '+1 (803) 452-3922',
//     },
//     {
//         id: 44,
//         guidlines: 32,
//         implementation: 'Garrett',
//         impact: 'Aquasure',
//         phone: '+1 (876) 475-2185',
//     },
//     {
//         id: 45,
//         guidlines: 21,
//         implementation: 'Kramer',
//         impact: 'Terrago',
//         phone: '+1 (912) 404-2597',
//     },
//     {
//         id: 46,
//         guidlines: 35,
//         implementation: 'Lane',
//         impact: 'Anivet',
//         phone: '+1 (911) 495-3587',
//     },
//     {
//         id: 47,
//         guidlines: 21,
//         implementation: 'Merritt',
//         impact: 'Inear',
//         phone: '+1 (856) 519-3838',
//     },
//     {
//         id: 48,
//         guidlines: 25,
//         implementation: 'Margarita',
//         impact: 'Unq',
//         phone: '+1 (931) 558-3156',
//     },
//     {
//         id: 49,
//         guidlines: 28,
//         implementation: 'Leigh',
//         impact: 'Marqet',
//         phone: '+1 (918) 526-2007',
//     },
//     {
//         id: 50,
//         guidlines: 31,
//         implementation: 'Coleman',
//         impact: 'Insuresys',
//         phone: '+1 (827) 449-3786',
//     },
//     {
//         id: 51,
//         guidlines: 31,
//         implementation: 'Alexander',
//         impact: 'Portico',
//         phone: '+1 (854) 576-2455',
//     },
//     {
//         id: 52,
//         guidlines: 38,
//         implementation: 'Tanisha',
//         impact: 'Earthwax',
//         phone: '+1 (994) 494-3496',
//     },
//     {
//         id: 53,
//         guidlines: 23,
//         implementation: 'Crane',
//         impact: 'Pushcart',
//         phone: '+1 (924) 497-3347',
//     },
//     {
//         id: 54,
//         guidlines: 26,
//         implementation: 'Carmella',
//         impact: 'Acusguidlines',
//         phone: '+1 (898) 575-2585',
//     },
//     {
//         id: 55,
//         guidlines: 27,
//         implementation: 'Rosalind',
//         impact: 'Isologica',
//         phone: '+1 (838) 572-2994',
//     },
//     {
//         id: 56,
//         guidlines: 37,
//         implementation: 'Duran',
//         impact: 'Gazak',
//         phone: '+1 (991) 446-3820',
//     },
//     {
//         id: 57,
//         guidlines: 27,
//         implementation: 'Bernard',
//         impact: 'Zoinguidlines',
//         phone: '+1 (824) 585-2197',
//     },
//     {
//         id: 58,
//         guidlines: 29,
//         implementation: 'Tate',
//         impact: 'Endipine',
//         phone: '+1 (896) 448-2084',
//     },
//     {
//         id: 59,
//         guidlines: 39,
//         implementation: 'Pearlie',
//         impact: 'Progenex',
//         phone: '+1 (805) 545-2585',
//     },
//     {
//         id: 60,
//         guidlines: 20,
//         implementation: 'Manning',
//         impact: 'Handshake',
//         phone: '+1 (917) 405-3406',
//     },
// ];

// const expandableRecords: ExpandableRecords[] = [
//     {
//         id: 1,
//         guidlines: 'fgdg',
//         implementation: 'Burt',
//         impact: 'Kaggle',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 'gdfgfd',
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//             },
//         ],
//     },
//     {
//         id: 2,
//         guidlines: 23,
//         implementation: 'Long',
//         impact: 'Magmina',
//         phone: '+1 (813) 583-2089',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 3,
//         guidlines: 31,
//         implementation: 'Alvarado',
//         impact: 'Translink',
//         phone: '+1 (975) 468-3875',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 4,
//         guidlines: 24,
//         implementation: 'Lilia',
//         impact: 'Digitalus',
//         phone: '+1 (891) 537-3461',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 5,
//         guidlines: 25,
//         implementation: 'Amanda',
//         impact: 'Bunga',
//         phone: '+1 (916) 522-3747',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 6,
//         guidlines: 20,
//         implementation: 'Alexandra',
//         impact: 'Conjurica',
//         phone: '+1 (876) 492-3181',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 7,
//         guidlines: 27,
//         implementation: 'Diana',
//         impact: 'Extrguidlinesn',
//         phone: '+1 (977) 417-3038',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 8,
//         guidlines: 26,
//         implementation: 'Goodman',
//         impact: 'Aquamate',
//         phone: '+1 (930) 545-2289',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 9,
//         guidlines: 26,
//         implementation: 'Edith',
//         impact: 'Pyrami',
//         phone: '+1 (854) 506-3468',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 10,
//         guidlines: 29,
//         implementation: 'Juana',
//         impact: 'Singavera',
//         phone: '+1 (872) 560-2324',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 11,
//         guidlines: 21,
//         implementation: 'Fitzgerald',
//         impact: 'Dancerity',
//         phone: '+1 (813) 573-2507',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 12,
//         guidlines: 38,
//         implementation: 'Madden',
//         impact: 'Corpulse',
//         phone: '+1 (935) 534-3876',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 13,
//         guidlines: 40,
//         implementation: 'Jewell',
//         impact: 'Frenex',
//         phone: '+1 (886) 516-3262',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 14,
//         guidlines: 32,
//         implementation: 'Kerr',
//         impact: 'Artiq',
//         phone: '+1 (807) 561-3077',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 15,
//         guidlines: 20,
//         implementation: 'Washington',
//         impact: 'Organica',
//         phone: '+1 (948) 458-3517',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 16,
//         guidlines: 20,
//         implementation: 'Audrey',
//         impact: 'Softmicro',
//         phone: '+1 (900) 592-3841',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 17,
//         guidlines: 39,
//         implementation: 'Allison',
//         impact: 'Playce',
//         phone: '+1 (998) 478-3810',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 18,
//         guidlines: 25,
//         implementation: 'Holder',
//         impact: 'Paragonia',
//         phone: '+1 (850) 536-2708',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 19,
//         guidlines: 26,
//         implementation: 'Atkinson',
//         impact: 'Scentric',
//         phone: '+1 (850) 467-2761',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 20,
//         guidlines: 35,
//         implementation: 'Delaney',
//         impact: 'Telpod',
//         phone: '+1 (934) 468-2218',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 21,
//         guidlines: 20,
//         implementation: 'Myrna',
//         impact: 'Zanity',
//         phone: '+1 (953) 565-3836',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 22,
//         guidlines: 30,
//         implementation: 'Erna',
//         impact: 'Techade',
//         phone: '+1 (872) 574-3879',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 23,
//         guidlines: 36,
//         implementation: 'Fannie',
//         impact: 'Cubix',
//         phone: '+1 (843) 576-2904',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 24,
//         guidlines: 38,
//         implementation: 'Melody',
//         impact: 'Talae',
//         phone: '+1 (817) 424-3500',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 25,
//         guidlines: 27,
//         implementation: 'Letitia',
//         impact: 'Enjola',
//         phone: '+1 (857) 441-2917',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 26,
//         guidlines: 33,
//         implementation: 'Nina',
//         impact: 'Eventex',
//         phone: '+1 (917) 599-2793',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 27,
//         guidlines: 40,
//         implementation: 'Byrd',
//         impact: 'Obones',
//         phone: '+1 (846) 422-2064',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 28,
//         guidlines: 34,
//         implementation: 'Chen',
//         impact: 'Dadabase',
//         phone: '+1 (956) 474-3409',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 29,
//         guidlines: 25,
//         implementation: 'Alexandria',
//         impact: 'Turnabout',
//         phone: '+1 (964) 415-2278',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 30,
//         guidlines: 37,
//         implementation: 'Pguidlines',
//         impact: 'Metroz',
//         phone: '+1 (897) 541-2460',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 31,
//         guidlines: 24,
//         implementation: 'Clare',
//         impact: 'Zilch',
//         phone: '+1 (832) 591-3814',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 32,
//         guidlines: 38,
//         implementation: 'Lindsey',
//         impact: 'Roughies',
//         phone: '+1 (942) 579-2920',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 33,
//         guidlines: 32,
//         implementation: 'Oconnor',
//         impact: 'Kinetica',
//         phone: '+1 (899) 599-3206',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 34,
//         guidlines: 35,
//         implementation: 'Maldonado',
//         impact: 'Zentime',
//         phone: '+1 (955) 419-2815',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 35,
//         guidlines: 25,
//         implementation: 'Day',
//         impact: 'Eargo',
//         phone: '+1 (895) 555-2916',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 36,
//         guidlines: 20,
//         implementation: 'Collier',
//         impact: 'Phuel',
//         phone: '+1 (998) 468-2079',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 37,
//         guidlines: 40,
//         implementation: 'Jeannette',
//         impact: 'Entogrok',
//         phone: '+1 (904) 567-2078',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 38,
//         guidlines: 33,
//         implementation: 'Wallace',
//         impact: 'Nurali',
//         phone: '+1 (877) 566-3957',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 39,
//         guidlines: 39,
//         implementation: 'Mcfadden',
//         impact: 'Cincyr',
//         phone: '+1 (949) 405-3992',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
//         ],
//     },
//     {
//         id: 40,
//         guidlines: 21,
//         implementation: 'Chrystal',
//         impact: 'Futurize',
//         phone: '+1 (988) 458-3032',
//         subRows: [
//             {
//                 id: 51,
//                 guidlines: 23,
//                 implementation: 'Bruno',
//                 impact: 'Magmina',
//                 phone: '+1 (813) 583-2089',
//             },
        // ],
    // },
];
export { records};
