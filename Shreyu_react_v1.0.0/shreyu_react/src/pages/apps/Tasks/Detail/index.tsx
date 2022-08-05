import React, { useState } from 'react';
import { Row, Col, Card, Button, ButtonGroup} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import defaultAvatar from '../../../../assets/images/users/avatar-1.jpg';
import { tasks, TaskTypes } from '../../Tasks/Board/data';
import AddNewTask from './AddNewTask';

// components
// import Statistics from './Statistics';
// import AboutProject from './AboutProject';
import Table from '../../../../components/Table';
// import { projects as data } from '../data';
// import Comments from './Comments';
// import Attachments from './Attachments';
// import Activities from './Activities';

// images
// import avatar1 from '../../../../assets/images/users/avatar-9.jpg';
// import avatar2 from '../../../../assets/images/users/avatar-10.jpg';
// import avatar3 from '../../../../assets/images/users/avatar-1.jpg';
// import avatar4 from '../../../../assets/images/users/avatar-3.jpg';

// dummy data
// import {  ProjectTypes } from '../data';
import {  projects as data } from './data';

const columns = [
    {
        Header: 'ID',
        accessor: 'id',
        sort: true,
    },
    {
        Header: 'Name',
        accessor: 'name',
        sort: true,
    },
    {
        Header: 'Description',
        accessor: 'description',
        sort: true,
    },
    // {
    //     Header: 'Image',
    //     accessor: 'image',
    //     sort: false,
    // },
    {
        Header: 'Status',
        accessor: 'status',
        sort: false,
        
    },
    {
        Header: 'Action',
        accessor: 'action',
        sort: false,
    },
];

const sizePerPageList = [
    {
        text: '5',
        value: 5,
    },
    {
        text: '10',
        value: 10,
    },
    {
        text: '25',
        value: 25,
    },
    {
        text: 'All',
        value: data.length,
    },
];

interface StateType {
    todoTasks: TaskTypes[];
    inprogressTasks: TaskTypes[];
    reviewTasks: TaskTypes[];
    doneTasks: TaskTypes[];
}
const ProjectDetail = () => {
    const [state, setState] = useState<StateType>({
        todoTasks: tasks.filter((t) => t.status === 'Pending'),
        inprogressTasks: tasks.filter((t) => t.status === 'Inprogress'),
        reviewTasks: tasks.filter((t) => t.status === 'Review'),
        doneTasks: tasks.filter((t) => t.status === 'Done'),
    });
    const [totalTasks, setTotalTasks] = useState<number>(tasks.length);
    const [newTaskModal, setNewTaskModal] = useState<boolean>(false);
    const [newTaskDetails, setNewTaskDetails] = useState<any>(null);

const toggleNewTaskModal = () => {
    setNewTaskModal((prevstate) => !prevstate);
};

const getList = (id: string) => {
    const modifiedState: any = { ...state };
    const stateTasks: any = modifiedState[id] && modifiedState[id];
    return stateTasks;
};


const newTask = (status: string, queue: string) => {
    setNewTaskDetails({
        dueDate: new Date(),
        userAvatar: [defaultAvatar],
        status: status,
        queue: queue,
    });
    setNewTaskModal(true);
};

/**
 * When date changes
 * @param {} date
 */
const handleDateChange = (date: Date) => {
    if (newTaskDetails) {
        setNewTaskDetails({ ...newTaskDetails, dueDate: date });
    }
};


const schemaResolver = yupResolver(
    yup.object().shape({
        title: yup.string().required(),
        priority: yup.string().required(),
    })
);
const methods = useForm({ resolver: schemaResolver });
const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
} = methods;

    /**
     * Selects the task
     * @param {*} taks
     */
    // const selectTask = (task: TaskItemTypes) => {
    //     setSelectedTask(task);
    // };

    const handleNewTask = (values: any) => {
        const formData = {
            title: values['title'],
            priority: values['priority'],
        };

        const newTask = {
            ...newTaskDetails,
            ...formData,
            id: totalTasks + 1,
            dueDate: newTaskDetails.dueDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            }),
            totalComments: 18,
            totalSubTasks: 12,
            subTaskCompleted: 2,
        };

        let modifiedState: any = { ...state };
        let tasks = [...getList(newTaskDetails.queue), newTask];
        modifiedState[newTaskDetails.queue] = [...tasks];

        setState(modifiedState);
        setNewTaskModal(false);
        setTotalTasks(totalTasks + 1);
        reset();
    };
    // const project: ProjectTypes = {
    //     id: 3,
    //     title: 'About Fghg',
    //     state: 'Completed',
    //     technology: 'Web Design',
    //     shortDesc: "You need to be sure there isn't anything embarrassing hidden in the middle of text",
    //     endDate: '21 Nov, 2020',
    //     totalTasks: 42,
    //     totalComments: 65,
    //     teamMembers: [
    //         {
    //             image: avatar1,
    //             name: 'Mat Helme',
    //         },
    //         {
    //             image: avatar2,
    //             name: 'Michael Zenaty',
    //         },
    //         {
    //             image: avatar3,
    //             name: 'James Anderson',
    //         },
    //         {
    //             image: avatar4,
    //             name: 'Mat Helme',
    //         },
    //     ],
    //     progress: 100,
    //     startDate: '15 July, 2019',
    //     totalBudget: '$13,250',
    //     owner: 'Rick Perry',
    // };
    // const [activeTab, setactiveTab] = useState<string>('comments');

    // //handles tab activation
    // const handleSelect = (eventKey: string | null) => {
    //     setactiveTab(eventKey!);
    // };
    

    return (
        <>
            <Row>
                <Col xs={12}>
                <div className="text-sm-end mt-sm-0 mt-2">
                            <ButtonGroup className="ms-2 d-none d-sm-inline-block me-1">
                                <Button variant="soft-primary" className="btn btn-soft-primary btn-sm">
                                    <i className="uil uil-edit me-1"></i>Edit
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup className="d-none d-sm-inline-block">
                                <Button className="btn btn-soft-danger btn-sm">
                                    <i className="uil uil-trash-alt me-1"></i>Delete
                                </Button>
                            </ButtonGroup>
                        </div>
                        </Col>
            </Row> 
                   {/*  <div className="page-title-box">
                        <h4 className="page-title">
                            Project: {project.title}{' '}
                            <Badge bg="success" className="fs-13 fw-normal me-1">
                                {project.state}
                            </Badge>
                            <Badge bg="" className="badge-soft-primary fs-13 fw-normal">
                                {project.technolog// interface ExpandableRecords {
oft-primary" className="btn btn-soft-primary btn-sm">
                                    <i className="uil uil-edit me-1"></i>Edit
                                </Button>
                            </ButtonGroup>
                            <ButtonGroup className="d-none d-sm-inline-block">
                                <Button className="btn btn-soft-danger btn-sm">
                                    <i className="uil uil-trash-alt me-1"></i>Delete
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>
               
        


            {/* <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body className="p-0">
                            <h6 className="card-title border-bottom p-3 mb-0 header-title">Project Overview</h6>
                            <Row className="py-1">
                                <Col md={6} xl={3}>
                                    <Statistics icon="grid" stats="210" description="Total Tasks" />
                                </Col>
                                <Col sm={6} xl={3}>
                                    <Statistics icon="check-square" stats="121" description="Total Tasks Completed" />
                                </Col>
                                <Col sm={6} xl={3}>
                                    <Statistics icon="users" stats="12" description="Total Team Size" />
                                </Col>
                                <Col sm={6} xl={3}>
                                    <Statistics icon="clock" stats="2500" description="Total Hours Spent" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}

            <Row>
                <Col xl={12}>
                    {/* <AboutProject project={project} /> */}

                    <Card>
                        <Card.Body>
                        <Col className="text-sm-end mt-sm-0 mt-2">
                                <Button onClick={() => newTask('Pending', 'todoTasks')}>
                                    <i className="uil-plus me-1"></i>Create Checklist
                                </Button>
                                </Col>
                        <Table
                                columns={columns}
                                data={data}
                                pageSize={6}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSelectable={true}
                                isSearchable={true}
                                
                            />
                            {/* <div className="">
                                <Nav
                                    as="ul"
                                    variant="pills"
                                    activeKey={activeTab}
                                    className="navtab-bg p-1"
                                    onSelect={handleSelect}>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="comments">Discussions</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="attac-file">Files/Resources</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="comments" id="comments" active={activeTab === 'comments'}>
                                        <Comments />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="attac-file" id="attac-file" active={activeTab === 'attac-file'}>
                                        <Attachments />
                                    </Tab.Pane>
                                </Tab.Content>
                            </div> */}
                        </Card.Body>
                    </Card>
                </Col>

                {/* <Col xl={4}>
                    <Activities activity={activity} />
                </Col> */}
            </Row>
            {newTaskModal && (
                <AddNewTask
                    newTaskModal={newTaskModal}
                    toggleNewTaskModal={toggleNewTaskModal}
                    handleNewTask={handleNewTask}
                    handleSubmit={handleSubmit}
                    newTaskDetails={newTaskDetails}
                    handleDateChange={handleDateChange}
                    register={register}
                    errors={errors}
                    control={control}
                />
            )}
        </>
    );
};

export default ProjectDetail;
