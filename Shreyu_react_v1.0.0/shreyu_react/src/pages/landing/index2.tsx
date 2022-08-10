import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import FeatherIcons from 'feather-icons-react';

// components
// import PageTitle from '../../components/PageTitle';
import TaskSection from './Section';
// import Task from './Task';

// dummy data
import { todayTasks, upcomingTasks, Searching, productlist, page, cart, Checkout, Account, Mobile, TaskItemTypes } from './data2';

// Task List
const TaskList = () => {
    const [todayTask] = useState<TaskItemTypes[]>([...todayTasks]);
    const [upcomingTask] = useState<TaskItemTypes[]>([...upcomingTasks]);
    const [Search] = useState<TaskItemTypes[]>([...Searching]);
    const [list] = useState<TaskItemTypes[]>([...productlist]);
    const [propage] = useState<TaskItemTypes[]>([...page]);
    const [cartt] = useState<TaskItemTypes[]>([...cart]);
    const [checkout] = useState<TaskItemTypes[]>([...Checkout]);
    const [account] = useState<TaskItemTypes[]>([...Account]);
    const [mobile] = useState<TaskItemTypes[]>([...Mobile]);
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
            {/* <PageTitle
                breadCrumbItems={[
                    { label: 'Tasks', path: '/apps/tasks/list' },
                    { label: 'Tasks List', path: '/apps/tasks/list', active: true },
                ]}
                title={'Tasks List'}
            /> */}
            <Row className='Ring'>
                <Col>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    {/* <Row>
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
                                    {/* </Row> */}
                                    
                                    <Row style={{margin:"-20px -32px"}}>
                                  
                                        <Col>
                                        <div className='Homee'>
                                            <div className='div1'>
                                            <img src={require("../../assets/images/Homepage.svg").default} alt="hfjhf"></img>
                                            <h3>Homepage</h3>
                                            </div>
                                            <div className='div2'>
                                                <div className='under'>
                                                    <span></span>
                                                </div>
                                                0/4 Completed
                                            </div>
                                            <div>
                                                <button className='butt1'>
                                                    <span className='sp1'>Check All</span>
                                                </button>
                                                <button className='butt2'>
                                                <span className='sp2'>Uncheck All</span>
                                                </button>
                                                <button className='butt3'>
                                                <span className='sp3'>Hide</span>
                                                </button>
                                            </div>
                                        
                                    </div>
                                            {/* tasks */}
                                            <div>
                                                <TaskSection
                                                    title="Homepage"
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
                                        <div className='Homee'>
                                            <div className='div1'>
                                            <img src={require("../../assets/images/Navigation.svg").default} alt="hfjhf"></img>
                                            <h3>Navigation</h3>
                                            </div>
                                            <div className='div2'>
                                                <div className='under'>
                                                    <span></span>
                                                </div>
                                                0/8 Completed
                                            </div>
                                            <div>
                                                <button className='butt1'>
                                                    <span className='sp1'>Check All</span>
                                                </button>
                                                <button className='butt2'>
                                                <span className='sp2'>Uncheck All</span>
                                                </button>
                                                <button className='butt3'>
                                                <span className='sp3'>Hide</span>
                                                </button>
                                            </div>
                                        
                                    </div>
                                                <TaskSection
                                                    title="Navigation"
                                                    tasks={upcomingTask}
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
                                        <div className='Homee'>
                                            <div className='div1'>
                                            <img src={require("../../assets/images/Search.svg").default} alt="hfjhf"></img>
                                            <h3>Search</h3>
                                            </div>
                                            <div className='div2'>
                                                <div className='under'>
                                                    <span></span>
                                                </div>
                                                0/5 Completed
                                            </div>
                                            <div>
                                                <button className='butt1'>
                                                    <span className='sp1'>Check All</span>
                                                </button>
                                                <button className='butt2'>
                                                <span className='sp2'>Uncheck All</span>
                                                </button>
                                                <button className='butt3'>
                                                <span className='sp3'>Hide</span>
                                                </button>
                                            </div>
                                        
                                    </div>
                                                <TaskSection
                                                    title="Search"
                                                    tasks={Search}
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
                                        <div className='Homee'>
                                            <div className='div1'>
                                            <img src={require("../../assets/images/Product list.svg").default} alt="hfjhf"></img>
                                            <h3>Product List</h3>
                                            </div>
                                            <div className='div2'>
                                                <div className='under'>
                                                    <span></span>
                                                </div>
                                                0/6 Completed
                                            </div>
                                            <div>
                                                <button className='butt1'>
                                                    <span className='sp1'>Check All</span>
                                                </button>
                                                <button className='butt2'>
                                                <span className='sp2'>Uncheck All</span>
                                                </button>
                                                <button className='butt3'>
                                                <span className='sp3'>Hide</span>
                                                </button>
                                            </div>
                                        
                                    </div>
                                                <TaskSection
                                                    title="Product List"
                                                    tasks={list}
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
                                        <div className='Homee'>
                                            <div className='div1'>
                                            <img src={require("../../assets/images/Product page.svg").default} alt="hfjhf"></img>
                                            <h3>Product Page</h3>
                                            </div>
                                            <div className='div2'>
                                                <div className='under'>
                                                    <span></span>
                                                </div>
                                                0/8 Completed
                                            </div>
                                            <div>
                                                <button className='butt1'>
                                                    <span className='sp1'>Check All</span>
                                                </button>
                                                <button className='butt2'>
                                                <span className='sp2'>Uncheck All</span>
                                                </button>
                                                <button className='butt3'>
                                                <span className='sp3'>Hide</span>
                                                </button>
                                            </div>
                                        
                                    </div>
                                                <TaskSection
                                                    title="Product Page"
                                                    tasks={propage}
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
                                        <div className='Homee'>
                                            <div className='div1'>
                                            <img src={require("../../assets/images/Cart.svg").default} alt="hfjhf"></img>
                                            <h3>Cart</h3>
                                            </div>
                                            <div className='div2'>
                                                <div className='under'>
                                                    <span></span>
                                                </div>
                                                0/6 Completed
                                            </div>
                                            <div>
                                                <button className='butt1'>
                                                    <span className='sp1'>Check All</span>
                                                </button>
                                                <button className='butt2'>
                                                <span className='sp2'>Uncheck All</span>
                                                </button>
                                                <button className='butt3'>
                                                <span className='sp3'>Hide</span>
                                                </button>
                                            </div>
                                        
                                    </div>
                                                <TaskSection
                                                    title="Cart"
                                                    tasks={cartt}
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
                                        <div className='Homee'>
                                            <div className='div1'>
                                            <img src={require("../../assets/images/Checkout.svg").default} alt="hfjhf"></img>
                                            <h3>Checkout</h3>
                                            </div>
                                            <div className='div2'>
                                                <div className='under'>
                                                    <span></span>
                                                </div>
                                                0/8 Completed
                                            </div>
                                            <div>
                                                <button className='butt1'>
                                                    <span className='sp1'>Check All</span>
                                                </button>
                                                <button className='butt2'>
                                                <span className='sp2'>Uncheck All</span>
                                                </button>
                                                <button className='butt3'>
                                                <span className='sp3'>Hide</span>
                                                </button>
                                            </div>
                                        
                                    </div>
                                                <TaskSection
                                                    title="Checkout"
                                                    tasks={checkout}
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
                                        <div className='Homee'>
                                            <div className='div1'>
                                            <img src={require("../../assets/images/Account.svg").default} alt="hfjhf"></img>
                                            <h3>Account</h3>
                                            </div>
                                            <div className='div2'>
                                                <div className='under'>
                                                    <span></span>
                                                </div>
                                                0/4 Completed
                                            </div>
                                            <div>
                                                <button className='butt1'>
                                                    <span className='sp1'>Check All</span>
                                                </button>
                                                <button className='butt2'>
                                                <span className='sp2'>Uncheck All</span>
                                                </button>
                                                <button className='butt3'>
                                                <span className='sp3'>Hide</span>
                                                </button>
                                            </div>
                                        
                                    </div>
                                                <TaskSection
                                                    title="Account"
                                                    tasks={account}
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
                                        <div className='Homee'>
                                            <div className='div1'>
                                            <img src={require("../../assets/images/Mobile.svg").default} alt="hfjhf"></img>
                                            <h3>Mobile</h3>
                                            </div>
                                            <div className='div2'>
                                                <div className='under'>
                                                    <span></span>
                                                </div>
                                                0/6 Completed
                                            </div>
                                            <div>
                                                <button className='butt1'>
                                                    <span className='sp1'>Check All</span>
                                                </button>
                                                <button className='butt2'>
                                                <span className='sp2'>Uncheck All</span>
                                                </button>
                                                <button className='butt3'>
                                                <span className='sp3'>Hide</span>
                                                </button>
                                            </div>
                                        
                                    </div>
                                                <TaskSection
                                                    title="Mobile"
                                                    tasks={mobile}
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
