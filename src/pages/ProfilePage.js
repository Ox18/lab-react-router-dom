import { useParams } from "react-router-dom";

function ProfilePage() {
  const { username } = useParams();

  return (
    <div>
      <h1>Profile Page: { username }</h1>
    </div>
  )
}

export default ProfilePage
