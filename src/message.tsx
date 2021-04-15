import React from 'react';

import messageHOC from './hoc';

let example = (props: any): any => <p>{props.name}, {props.message}</p>;

let message = messageHOC(example);

export default message;