'use client';

import {clsx} from 'clsx';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {buy} from '../server/buy.js';
import {Notification} from '../shared/notification.js';
import {Button} from './button.js';

export interface ProductProps {
  readonly productId: string;
}

export function Product({productId}: ProductProps): JSX.Element {
  const buyProduct = buy.bind(null, productId);
  const [result, formAction] = ReactDOM.useFormState(buyProduct, undefined);

  return (
    <form action={formAction}>
      <p className="my-2">
        This is a client component that renders a form with a form action. On
        submit, the form action calls a server action with the current form
        data, which in turn responds with a success or error result.
      </p>
      <input
        type="number"
        name="quantity"
        defaultValue={1}
        step={1}
        min={1}
        max={99}
        className={clsx(
          `p-1`,
          result?.status === `error` && result.fieldErrors?.quantity
            ? [`bg-red-100`, `outline-red-700`]
            : [`bg-zinc-100`, `outline-cyan-500`],
        )}
      />
      {` `}
      <Button>Buy now</Button>
      {result && (
        <Notification status={result.status}>
          {result.status === `success` ? (
            <p>
              Bought <strong>{result.quantity}</strong>
              {` `}
              {result.quantity === 1 ? `item` : `items`}.
            </p>
          ) : (
            <p>{result.message}</p>
          )}
          <p>
            Total items bought: <strong>{result.totalQuantityInSession}</strong>
          </p>
        </Notification>
      )}
    </form>
  );
}
