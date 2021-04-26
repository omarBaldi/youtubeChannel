/* eslint-disable */
import { FC } from 'react';
import NotFoundProps from './dto';

export const NotFound: FC<NotFoundProps> = ({
    errorMessage,
    errorCode
}: NotFoundProps) => {
    return (
        <div>
            {errorMessage && (
                <div>
                    <h1>{errorMessage}</h1>
                    <h1>{errorCode}</h1>
                </div>
            )}
        </div>
    )
}
