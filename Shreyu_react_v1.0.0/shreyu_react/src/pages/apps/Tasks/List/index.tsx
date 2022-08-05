import React, {useState} from 'react';
import { Row, Col, Card, Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { Link } from 'react-router-dom';
// import FeatherIcons from 'feather-icons-react';

// components
import PageTitle from '../../../../components/PageTitle';

// import TaskSection from './Section';
import Table from '../../../../components/Table';
import AddNewTask from '../Board/AddNewTask';
// import Task from './Task';

// dummy data
// import { todayTasks, upcomingTasks, otherTasks, TaskItemTypes } from './data';
import { records as data } from '../../../tables/data';
import defaultAvatar from '../../../../assets/images/users/avatar-1.jpg';
import { tasks, TaskTypes } from '../Board/data';


const columns = [
    {
        Header: 'ID',
        accessor: 'id',
        sort: true,
    },
    {
        Header: 'Guidlines',
        accessor: 'guidlines',
        sort: true,
    },
    // {
    //     Header: 'Phone Number',
    //     accessor: 'phone',
    //     sort: false,
    // },
    {
        Header: 'Implementation',
        accessor: 'implementation',
        sort: true,
    },
    {
        Header: 'Impact',
        accessor: 'impact',
        sort: false,
    },
    {
        Header: 'Status',
        accessor: 'edit',
        sort: false,
        colSpan: 2,
        
    },
    {
        Header: 'Action',
        accessor: 'delete',
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
// Task List
const TaskList = () => {
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
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Tasks', path: '/apps/tasks/list' },
                   
                ]}
                title={'Tasks List'}
            />
            <Row>
            
                <Col xl={12}>
              
                    <Row>
                   
                        <Col>
                        
                            <Card>
                            
                                <Card.Body>
                                <Col className="text-sm-end mt-sm-0 mt-2">
                                <Button onClick={() => newTask('Pending', 'todoTasks')}>
                                    <i className="uil-plus me-1"></i>Add New
                                </Button>
                                </Col>
                                <Table
                                columns={columns}
                                data={data}
                                pageSize={5}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSelectable={true}
                                isSearchable={true}
                                
                            />
                                    {/* <Row>
                                        <Col sm={3}>
                                            <Link to="#" className="btn btn-primary">
                                                <i className="uil uil-plus me-1"></i>Add New
                                            </Link>
                                        </Col> */}
                                        {/* <Col sm={9}>
                                            <div className="float-sm-end mt-3 mt-sm-0">
                                                <div className="task-search d-inline-block mb-3 mb-sm-0 me-sm-1">
                                                    <form>
                                                        <div className="input-group">
                                                            <input
                                                                type="text"
                                                                className="form-control search-input"
                                                                placeholder="Search..."
                                                            />
                                                            <span className="uil uil-search icon-search"></span>
                                                            <Button
                                                                variant="soft-primary"
                                                                className="input-group-text"
                                                                type="button">
                                                                <i className="uil uil-file-search-alt"></i>
                                                            </Button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <Dropdown className="d-inline-block" align="end">
                                                    <Dropdown.Toggle variant="secondary" className="cursor-pointer">
                                                        <i className="uil uil-sort-amount-down"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>Due Date</Dropdown.Item>
                                                        <Dropdown.Item>Added Date</Dropdown.Item>
                                                        <Dropdown.Item>Assignee</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </Col> */}
                                    {/* </Row>  */}

                                    {/* <Row className="mt-3">
                                        <Col>
                                             tasks 
                                            <div>
                                                <TaskSection
                                                    title="Today"
                                                    tasks={todayTask}
                                                    selectTask={selectTask}></TaskSection>
                                            </div>
                                            <div className="mt-4">
                                                <TaskSection
                                                    title="Upcoming"
                                                    tasks={upcomingTask}
                                                    selectTask={selectTask}></TaskSection>
                                            </div>
                                            <div className="mt-4 mb-4">
                                                <TaskSection
                                                    title="Other"
                                                    tasks={otherTask}
                                                    selectTask={selectTask}></TaskSection>
                                            </div>
                                        </Col>
                                    </Row> */}

                                    {/* <Row className="mb-3 mt-4">
                                        <Col xs={12}>
                                            <div className="text-center">
                                                <Link to="#" className="btn btn-white mb-3">
                                                    <FeatherIcons
                                                        icon="loader"
                                                        className="icon-dual icon-xs me-2"></FeatherIcons>
                                                    Load more
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row> */}
                                     
                                </Card.Body>
                            </Card>
                        </Col>
                       
                    </Row>
                </Col>
{/* 
                <Col xl={4}>
                    <Task selectedTask={selectedTask} />
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

export default TaskList;
