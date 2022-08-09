import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import FeatherIcons from 'feather-icons-react';

// components
import PageTitle from '../../../components/PageTitle';
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
import TaskSection from './Section';
// import Task from './Task';

// dummy data
import { todayTasks, upcomingTasks, productTasks, otherTasks, TaskItemTypes } from './data';

// Task List
const TaskList = () => {
    const [todayTask] = useState<TaskItemTypes[]>([...todayTasks]);
    const [upcomingTask] = useState<TaskItemTypes[]>([...upcomingTasks]);
    const [productTask] = useState<TaskItemTypes[]>([...productTasks]);
    const [otherTask] = useState<TaskItemTypes[]>([...otherTasks]);
    const [selectedTask, setSelectedTask] = useState<TaskItemTypes>(todayTasks[0]);

    /**
     * Selects the task
     * @param {*} taks
     */
    const selectTask = (task: TaskItemTypes) => {
        setSelectedTask(task);
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Tasks', path: '/apps/tasks/list' },
                    { label: 'Tasks List', path: '/apps/tasks/list', active: true },
                ]}
                title={'Tasks List'}
            />
            <Row>
                <Col xl={12}>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col sm={2}>
                                            <Link to="#" className="btn btn-dark width-lg">
                                                HomePage
                                            </Link>
                                        </Col>
                                        <Col sm={2}>
                                            <Link to="#" className="btn btn-dark width-lg">
                                               Navigation
                                            </Link>
                                        </Col>
                                        <Col sm={2}>
                                            <Link to="#" className="btn btn-dark width-lg">
                                                Product List
                                            </Link>
                                        </Col>
                                        <Col sm={2}>
                                            <Link to="#" className="btn btn-dark width-lg">
                                                Product Page
                                            </Link>
                                        </Col>
                                        <Col sm={2}>
                                            <Link to="#" className="btn btn-dark width-lg">
                                                Checkout
                                            </Link>
                                        </Col>
                                        <Col sm={2}>
                                            <Link to="#" className="btn btn-dark width-lg">
                                                Account
                                            </Link>
                                        </Col>
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
                                    </Row>
                                    
                                    <Row className="mt-3" style={{margin:"3px -32px"}}>
                                  
                                        <Col>
                                        <div style={{background:"rgb(240, 255, 247)", height:"70px", padding:"15px 10px", fontSize:"x-large"}}>
                                        <i className="uil uil-home"></i>Homepage
                                    </div>
                                            {/* tasks */}
                                            <div>
                                                <TaskSection
                                                    title="Today"
                                                    tasks={todayTask}
                                                    selectTask={selectTask}></TaskSection>
                                            </div>
                                        </Col>
                                    </Row>

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
                <Col xl={12}>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>                                    
                                    <Row style={{margin:"-20px -32px"}}>
                                  
                                        <Col>
                                            <div style={{background:"rgb(240, 255, 247)", height:"70px", padding:"15px 10px", fontSize:"x-large"}}>
                                        <i className="uil uil-compass"></i>Navigation
                                    </div>
                                                <TaskSection
                                                    title="Upcoming"
                                                    tasks={upcomingTask}
                                                    selectTask={selectTask}></TaskSection>
                                            {/* <div className="mt-4 mb-4">
                                                <TaskSection
                                                    title="Other"
                                                    tasks={otherTask}
                                                    selectTask={selectTask}></TaskSection>
                                            </div> */}
                                        </Col>
                                    </Row>

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

                <Col xl={12}>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>                                    
                                    <Row style={{margin:"-20px -32px"}}>
                                  
                                        <Col>
                                            <div style={{background:"rgb(240, 255, 247)", height:"70px", padding:"15px 10px", fontSize:"x-large"}}>
                                        <i className="uil uil-list-ul"></i>Product List
                                    </div>
                                                <TaskSection
                                                    title="Other"
                                                    tasks={otherTask}
                                                    selectTask={selectTask}></TaskSection>
                                        </Col>
                                    </Row>

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

                <Col xl={12}>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>                                    
                                    <Row style={{margin:"-20px -32px"}}>
                                  
                                        <Col>
                                            <div style={{background:"rgb(240, 255, 247)", height:"70px", padding:"15px 10px", fontSize:"x-large"}}>
                                        <i className="uil uil-compass"></i>Product Page
                                    </div>
                                                <TaskSection
                                                    title="Upcoming"
                                                    tasks={productTask}
                                                    selectTask={selectTask}></TaskSection>
                                        </Col>
                                    </Row>

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


                {/* <Col xl={4}>
                    <Task selectedTask={selectedTask} />
                </Col> */}
            </Row>
        </>
    );
};

export default TaskList;
