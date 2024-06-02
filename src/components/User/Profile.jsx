import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user && user.userId) {
      fetch(`https://projectsyncifyapi.onrender.com/api/v1/user/details/${user.userId}/`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setProfile(data);
        })
        .catch((error) => {
          console.error('Error fetching profile:', error);
        });
    }
  }, [user]);

  return (
    <div className="h-screen px-10 py-10">
      <h1 className="text-3xl text-center">hi {user && user.names}</h1>
      <p>email: {user && user.email}</p>
      {profile && (
        <>
          <img src={profile.image} alt={user.names} />
          <p>Username: {profile.username}</p>
          {/* Add other profile details here */}
        </>
      )}
    </div>
  );
};

export default Profile;
