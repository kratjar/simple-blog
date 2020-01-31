import React, { Suspense, FC, ReactElement } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

export const WaitingComponent = (Component: FC) => (props: any): ReactElement<any> => (
  <Suspense fallback={<CircularProgress />}>
    <Component {...props} />
  </Suspense>
)
