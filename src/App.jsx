import NewMain from "./component/NewMain"
import { Analytics } from '@vercel/analytics/react';

export default function App(){

  return (
    <>
      <NewMain />
      <Analytics/>
    </>
  )
}
