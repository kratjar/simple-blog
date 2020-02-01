import React, { Suspense, FC, ReactElement } from 'react'

import { LoadingSpinner } from 'components/shared/LoadingSpinner'

export const WaitingComponent = (Component: FC) => (props: any): ReactElement<any> => (
  <Suspense fallback={<LoadingSpinner />}>
    <Component {...props} />
  </Suspense>
)
