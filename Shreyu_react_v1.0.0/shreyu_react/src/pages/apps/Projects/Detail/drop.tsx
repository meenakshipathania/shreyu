import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// dummy data
// import { TaskTypes } from './data';

// interface TaskItemProps {
//     task: TaskTypes;
// }

// task item
const TaskItem = () => {
    // const task = props.task || {};

    return (
        <div className="task-list-items">
            <Card className="border mb-0">
                <Card.Body className="p-3">
                    <Dropdown className="float-end" align="end">
                        <Dropdown.Toggle as="a" className="cursor-pointer text-muted arrow-none">
                            <i className="uil uil-ellipsis-v fs-14"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <i className="uil uil-edit-alt me-2"></i>Edit
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <i className="uil uil-user-plus me-2"></i>Add People
                            </Dropdown.Item>
                            <Dropdown.Item className="text-warning">
                                <i className="uil uil-exit me-2"></i>Leave
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="text-danger">
                                <i className="uil uil-trash me-2"></i>Delete
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Card.Body>
            </Card>
        </div>
    );
};
export default TaskItem;