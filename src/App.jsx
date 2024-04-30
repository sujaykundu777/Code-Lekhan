import NewMain from "./component/NewMain"
import LeaveAlert from "./component/LeaveAlert"
import { Analytics } from '@vercel/analytics/react';

export default function App(){

  return (
    <>
      <NewMain />
      <Analytics/>
      <LeaveAlert/>
    </>
  )
}
