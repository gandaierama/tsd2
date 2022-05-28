import * as React from 'react';
import Alert from 'react-bootstrap/Alert';

export default function AlertBase({title, text, type}) {
  return (
    <Alert dismissible variant={type} className="text-center">
      <Alert.Heading>{title}</Alert.Heading>
      <p>
        {text}
      </p>
    </Alert>
  )
}
