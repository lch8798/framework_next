import React from 'react';
import { useRouter } from 'next/router';

export default function Dynamic(): JSX.Element {
    const { id, comment } = useRouter().query;

    return (
        <p>
            <p>id: {id}</p>
            <p>comment: {comment}</p>
        </p>
    );
}
