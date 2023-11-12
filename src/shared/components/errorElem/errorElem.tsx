import React from 'react';
import { ErrorInputType } from '../../types/AuthInput';

type ErrorElemParam = {
  type:string,
  errors: ErrorInputType
}

const ErrorElem = ({ errors, type }: ErrorElemParam) => {
  const { emailError, isDirty, isEmpty, minLengthError } = errors;

  return (
    <div>
      {isDirty && isEmpty && (
        <p className='text-red-400'>
          Empty {type} Input
        </p>
      )}
      {type === 'Email' ? (
        <>
          {isDirty && emailError && (
            <p className='text-red-400'>
              Incorrect {type}
            </p>
          )}
        </>
      ) : (
        <>
          {isDirty && minLengthError && (
            <p className='text-red-400'>
              Incorrect {type} Length
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default ErrorElem;